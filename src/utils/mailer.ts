import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";
import User from "@/models/userModel";

export const sendMail = async ({
    to,
    emailType,
    userId
}:any
) => {
    try {
        //Configure mail for usage
        const hashedToken = bcryptjs.hashSync(userId.toString(), 10);

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 3600000,
            });
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now() + 3600000,
            });
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "7379cd6a6f780a",
                pass: "0b38581dabbc3d",
            },
        });

        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: to,
            subject:
                emailType === "RESET"
                    ? "Reset your password"
                    : "Verify your email",
            html: `
                <h1>${
                    emailType === "VERIFY"
                        ? "Verify your email"
                        : "Reset your password"
                }</h1>
                <p>Click the link below to ${
                    emailType === "VERIFY"
                        ? "verify your email"
                        : "reset your password"
                }</p>
                <a href="${
                    process.env.CLIENT_URL
                }/verifyemail?token=${hashedToken}">Click here</a>
            `,
        };

        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse;
    } catch (error: any) {
        throw new Error(error.message);
    }
};
