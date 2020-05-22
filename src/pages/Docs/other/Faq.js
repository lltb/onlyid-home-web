import React from "react";
import { Link, Typography } from "@material-ui/core";
import { Link as RRLink } from "react-router-dom";

export default function() {
    return (
        <>
            <Typography variant="h4" gutterBottom>
                常见问题
            </Typography>
            <Typography variant="h6" gutterBottom>
                唯ID真的很棒，我可以怎么支持你们？
            </Typography>
            <Typography variant="body1" gutterBottom>
                衷心感谢你的喜欢，我们一定会越做越好，有很多方式可以支持我们：
            </Typography>
            <Typography variant="body1" gutterBottom component="ul">
                <li>尽量使用唯ID SSO，而不是唯ID OTP。</li>
                <li>向你身边的开发者朋友、计算机专业的同学推荐唯ID。</li>
                <li>给我们反馈，哪些做得好的，哪些做得还不够，官网左下角有我们的联系方式。</li>
                <li>
                    给我们的开源项目点亮星星，
                    <Link href="https://github.com/onlyid" target="_blank">
                        仓库地址
                    </Link>
                    。
                </li>
            </Typography>
            <Typography variant="h6" gutterBottom>
                可在哪些平台上使用唯ID？
            </Typography>
            <Typography variant="body1" gutterBottom>
                iOS、Android 和网页均支持使用唯ID。
            </Typography>
            <Typography variant="body1" gutterBottom component="ul">
                <li>对于iOS，支持iOS 9或更高版本。</li>
                <li>对于Android，支持Android 4.4或更高版本。</li>
                <li>对于网页，支持IE 11、Firefox和Chrome等现代浏览器。</li>
            </Typography>
            <Typography variant="h6" gutterBottom>
                短信是否收费？
            </Typography>
            <Typography variant="body1" gutterBottom>
                公有部署不收取任何短信费用（除固定年费外），对于专有部署的企业客户，以合同为准。
            </Typography>
            <Typography variant="h6" gutterBottom>
                短信可以自定义签名吗？
            </Typography>
            <Typography variant="body1" gutterBottom>
                出于下列原因，你无法自定义短信签名：
            </Typography>
            <Typography variant="body1" component="ul" gutterBottom>
                <li>
                    我们要确保唯ID是一款合法、安全的产品，自定义界面或短信会带来潜在的违法违规、侵权等法律风险，以及潜在的网络欺诈（phishing）等安全风险。
                </li>
                <li>
                    我们要确保用户感知到是在使用唯ID的相关产品，而不是其他三方服务或应用本身的功能，以确保可以跨应用共享账号，并带来一致、良好的用户体验。
                </li>
            </Typography>
            <Typography variant="h6" gutterBottom>
                你们收费这么便宜，以后会有广告吗？
            </Typography>
            <Typography variant="body1" gutterBottom>
                永远不会。
            </Typography>
            <Typography variant="body1" gutterBottom>
                唯ID的使用场景决定了其用户体验对你的应用至关重要，广告会大大影响用户体验，降低用户留存率、转化率。我们现在，将来都不会添加任何形式的广告。
            </Typography>
            <Typography variant="h6" gutterBottom>
                唯ID和开发者自己实现注册登录功能以及和常见三方登录（微信、微博等）的区别？
            </Typography>
            <Typography variant="body1" gutterBottom>
                见{" "}
                <Link component={RRLink} to="/docs/background">
                    项目背景和特点
                </Link>
                。
            </Typography>
            <Typography variant="h6" gutterBottom>
                这里找不到想问的问题？
            </Typography>
            <Typography variant="body1" gutterBottom>
                不管是技术问题还是商务问题，都欢迎联系我们（官网左下角），我们一直都在。
            </Typography>
        </>
    );
}
