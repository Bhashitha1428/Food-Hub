
const nodemailer = require('nodemailer');


function sendMessage(receiver, msg) {
    const sender = 'restaurantbookingsys@gmail.com';
    const subject = 'Delete Food Hub account';
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        
        
        auth: {
            user: 'restaurantbookingsys@gmail.com',
            pass: 'Minali123'
            
        },
      
       
    });

    const mailOptions = {
        from: sender,
        to: receiver,
        subject: subject,
        html: '<h1>Welcome to Food Hub '+msg
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('error');
            console.log(error);
            throw new Error('email sending failed');
            
        } else {
            console.log('Email send successfully');
            res.status(200).json({
                state: true
                
            })
        }
    });
}

module.exports={
    sendMessage:sendMessage
}