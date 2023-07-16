import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'oauth2',
        user: 'request@fitsuz.com',
        pass: 'Fitsuz2023@'
    }
});

/** @type {import('./$types').Actions} */
export const actions = {
    default: async (event) => {
      console.log('papito');
      const options = {
        from : 'fitsuz@info.com',
        to : 'albertotates@hotmail.es',
        subjet : 'pepito',
        html: '<h1>ayuda</h1>'
      }
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });

      // transporter.sendMail(options)
      return { sucess: true }
    }
};
