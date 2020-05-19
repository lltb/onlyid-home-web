import React from "react";
import { Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

export default function() {
    return (
        <>
            <Typography variant="h4" gutterBottom>
                使用唯ID OTP
            </Typography>
            <Alert>
                <Typography variant="subtitle1">
                    使用唯ID OTP快捷发送短信、邮箱验证码，简单易用，成本更低。
                </Typography>
            </Alert>
            <Alert severity="info">
                <Typography variant="subtitle1">
                    如果你还没创建应用，请到控制台新建一个得到应用id和应用secret再继续。
                </Typography>
            </Alert>
            <Typography variant="body1" gutterBottom>
                唯ID
                OTP（一次性密码）不需要集成SDK，让你通过简单调一个HTTP接口，就可以快速发送短信、邮箱验证码。
            </Typography>
            <Typography variant="h5" gutterBottom>
                发送验证码请求
            </Typography>
            <Typography variant="body1">POST方式请求：</Typography>
            <pre>https://www.onlyid.net/api/open/send-otp</pre>
            <Typography variant="body1">设置Content-Type为application/json，带上参数：</Typography>
            <pre>
                recipient: 手机号或电子邮箱, clientId: 你的应用id, clientSecret: 你的应用secret
            </pre>
            <Typography variant="body1">即可发送验证码，示例：</Typography>
            <pre>
                <span className="color1">POST </span>
                https://www.onlyid.net/api/open/send-otp
                <br />
                <span className="color2">Content-Type</span>: application/json
                {`
{
    "recipient":"13612345678",
    "clientId":"07c9770f22b1460398d44b4a3543db79",
    "clientSecret":"8d08fbbd89a547df8bda56eba12fac2e"
}`}
            </pre>
            <Typography variant="body1">发送成功，响应报文示例：</Typography>
            <pre>
                <span className="color1">HTTP/1.1 200</span>
                {`
{
    "otp": "581305",
    "expireMin": 10,
    "maxFailCount": 10,
    "length": 6,
    "type": "NUMBER"
}`}
            </pre>
            <Typography variant="body1">发送失败，响应报文示例：</Typography>
            <pre>
                <span className="color1">HTTP/1.1 400</span>
                {`
{
  "error": "应用不存在或client id错误，请检查"
}`}
            </pre>
            <Alert severity="info">
                <Typography variant="subtitle1">
                    唯ID所有OPEN
                    API，请求成功返回HTTP状态码200，请求失败返回40X（一般是400），然后通过error字段给出具体错误原因。
                </Typography>
            </Alert>
            <Typography variant="h5" gutterBottom>
                注意事项
            </Typography>
            <Typography variant="body1" gutterBottom>
                随着接入应用增多，唯ID在短信发送上承担了巨额费用成本，但我们仍坚持200元兜底的良心定价。
            </Typography>
            <Typography variant="body1" gutterBottom>
                开发者应合理使用资源，添加必要的防盗刷机制（图形验证码等），同时更推荐接入唯ID
                SSO，通过账号共享方便用户，也稍微降低我们的成本。
            </Typography>
            <Alert severity="error">
                <Typography variant="subtitle1">
                    唯ID有完善的风控机制，滥用短信资源、频繁打扰用户的恶意开发者将被纳入黑名单，面临从封禁单个违规应用一个月到最高封禁开发者账号一年的处罚！
                </Typography>
            </Alert>
        </>
    );
}
