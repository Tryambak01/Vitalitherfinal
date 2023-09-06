import nodemailer from 'nodemailer';
import User from "@/models/userModel";  
import bcryptjs from 'bcryptjs';

//sending an email
//create transport , then transport.sendmail

export const sentEmail = async({email, emailType, userId}:any) =>{    //these parameters will be provided by the user
    try {
        //create a hashed token by hashing the userId
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);

        if(emailType === "VERIFY"){
            await User.findByIdAndUpdate(userId,{
                verifyToken:hashedToken ,
                verifyTokenExpiry: Date.now() + 3600000
            })
        }
        else if(emailType === "RESET"){
            await User.findByIdAndUpdate(userId,{
                forgotPasswordToken:hashedToken ,
                forgotPasswordTokenExpiry: Date.now() + 3600000
            })
        }

        //create a transport using nodemailer
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "f0fceea3d6b8c3",
              pass: "5f02573b62f48d"
            }
            //add these credentials to .env file
          });
        
          const mailOptions = {
                from: 'tryambakaadiga@gmail.com',
                to:email,
                subject: emailType === "VERIFY"?"Verify your email ": "Reset your password",
                html: `<p>Click <a href="${process.env.domain}/verifyemail?token=${hashedToken}">here<a/> 
                to ${emailType === "VERIFY" ? "verify your email": "Reset your password"}</p>`

          }
          const mailresponse = await transport.sendMail(mailOptions);
          return mailresponse;
    }
    catch (error: any) {
        throw new Error(error.message);
    }
}