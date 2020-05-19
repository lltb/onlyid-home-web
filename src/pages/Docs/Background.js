import React from "react";
import { Typography, Link } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

export default function() {
    return (
        <>
            <Typography variant="h4" gutterBottom>
                项目背景和特点
            </Typography>
            <Alert>
                <Typography variant="subtitle1">
                    我们坚信：账号和言论自由、互联网安全一样，是人民的基本权利；所有网站和APP，不管规模大小，都应该能够平等的让所有人访问和使用。
                </Typography>
            </Alert>
            <Typography variant="body1" gutterBottom>
                一直以来，人们习惯在每个用到的应用都注册一个账号，设置单独的密码。这导致了一些问题：
            </Typography>
            <Typography variant="body1" gutterBottom component="ul">
                <li>
                    账号密码众多，难以记忆和管理，如果都使用同个账号密码，一旦密码泄露，全部应用都要改一遍，非常麻烦。
                </li>
                <li>
                    小众应用更难吸引用户注册，头部应用（微信等）占据更多流量，长尾效应消失，互联网逐渐远离开放、自由精神。
                </li>
            </Typography>
            <Typography variant="body1" gutterBottom>
                所以在
                <b> 2017年6月12日 </b>
                ，我们正式发起唯ID项目。唯ID是统一的账号和认证平台，用户只需要在一个接入唯ID的应用注册，即可在所有应用使用。
            </Typography>
            <Typography variant="h5" gutterBottom>
                唯ID的特点
            </Typography>
            <Typography variant="body1" gutterBottom component="ul">
                <li>
                    稳定、可靠，唯ID作为账号系统，对接入的应用非常重要。所以在开发时，我们始终把安全、稳定、可靠放在首位。
                </li>
                <li>
                    <b>开源、自由</b>，自豪地采用GPLv3协议，托管在&nbsp;
                    <Link href="https://github.com/onlyid" target="_blank">
                        GitHub
                    </Link>
                    ，所有人可参与贡献，不受大公司控制。
                </li>
                <li>
                    路线图公开，和其他三方登录不同，唯ID的开发路线图公开，所有人可参与讨论并影响唯ID的未来。
                </li>
            </Typography>
            <Typography variant="h5" gutterBottom>
                唯ID和自有登录对比
            </Typography>
            <Typography variant="body1" gutterBottom component="ul">
                <li>
                    <b>唯ID的开发初衷就是替代应用的自有登录</b>。
                </li>
                <li>
                    用户只需要在一个接入唯ID的应用注册，即可在所有应用使用；应用可以获取手机号、昵称、头像等基础用户信息。
                </li>
                <li>用户端有APP，一站式管理用户信息、登录设备、授权应用等。</li>
                <li>开发者控制台有完善的应用管理、用户管理、数据统计等功能。</li>
            </Typography>
            <Typography variant="h5" gutterBottom>
                和三方登录（微信、微博等）的对比
            </Typography>
            <Typography variant="body1" gutterBottom component="ul">
                <li>
                    和微信、微博只能作为辅助登录方式不同，
                    <b>你可以放心的把唯ID作为你的应用唯一的登录方式</b>。
                </li>
                <li>
                    我们是专业的IDaaS解决方案，而不是社交平台开放的一小部分能力，企业也可以放心选择我们。
                </li>
                <li>
                    唯ID返回用户真实登录账号，而不只是平台绑定的open
                    id，更加开放，可自由接入或迁出。
                </li>
                <li>
                    唯ID是中立的平台，和你的应用没有竞争关系，永远不会出现&nbsp;
                    <Link
                        href="http://finance.eastmoney.com/a/201901281035452049.html"
                        target="_blank"
                    >
                        抖音不能用微信登录
                    </Link>
                    &nbsp;的破事。
                </li>
            </Typography>
        </>
    );
}
