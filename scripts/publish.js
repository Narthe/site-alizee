require('dotenv').config();
const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

async function upload() {

    const config = {
        host: process.env.FTP_SERVER,
        user: process.env.FTP_USER,
        password: process.env.FTP_PWD,
        port: 21,
        localRoot: __dirname + "/../dist",
        remoteRoot: "/www/",
        include: ["*", "**/*"],
        //exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],
        // delete ALL existing files at destination before uploading, if true
        deleteRemote: false,
        // Passive mode is forced (EPSV command is not sent)
        forcePasv: true,
        // use sftp or ftp
        sftp: false
    };

    ftpDeploy
    .deploy(config)
    .then(res => console.log("finished:", res))
    .catch(err => console.log(err));
    
}

upload()