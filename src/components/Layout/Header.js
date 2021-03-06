import React, { useState } from "react";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "assets/logo.svg";
import { Link, NavLink, useHistory } from "react-router-dom";
import classNames from "classnames";
import { Button, ListItemIcon, ListItemText, Menu, MenuItem } from "@material-ui/core";
import { AccountBox, Dashboard, ExpandMore, Sms } from "@material-ui/icons";

export default function({ onOpenTrialDialog }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory();

    const openProductMenu = event => {
        event.preventDefault();
        setAnchorEl(event.currentTarget);
    };

    const closeProductMenu = () => {
        setAnchorEl(null);
    };

    const productMenuGo = url => {
        history.push(url);
        closeProductMenu();
    };

    const openTrialDialog = event => {
        event.preventDefault();
        onOpenTrialDialog();
    };

    return (
        <header className={styles.headerBg}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <div style={{ fontSize: 0 }}>
                        <Logo
                            className={styles.logo}
                            onClick={() => history.push("/")}
                            style={{ fill: "#e8e8e8", width: 80, verticalAlign: "middle" }}
                        />
                    </div>
                    <ul className={styles.menu}>
                        <li>
                            <Link to="" onClick={openProductMenu}>
                                产品与服务
                                <ExpandMore className={styles.expandIcon} />
                            </Link>
                        </li>
                        <li>
                            <NavLink to="/docs">开发文档</NavLink>
                        </li>
                        <li>
                            <Link to="" onClick={openTrialDialog}>
                                在线体验
                            </Link>
                        </li>
                        <li>
                            <NavLink to="/pricing">套餐价格</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={styles.headerRight}>
                    <a href="https://github.com/onlyid" target="_blank" rel="noopener noreferrer">
                        <i className={classNames("iconfont", styles.githubIcon)}>&#xe6f6;</i>
                    </a>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginLeft: 30 }}
                        onClick={() => window.location.assign("https://www.onlyid.net/console")}
                    >
                        登录控制台
                    </Button>
                </div>
            </div>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                open={Boolean(anchorEl)}
                onClose={closeProductMenu}
                className={styles.productMenu}
                getContentAnchorEl={null}
            >
                <span className={styles.tip}>无密码 轻认证</span>
                <MenuItem onClick={() => productMenuGo("/#otp")}>
                    <ListItemIcon>
                        <Sms />
                    </ListItemIcon>
                    <ListItemText>唯ID &nbsp; OTP</ListItemText>
                </MenuItem>
                <span className={styles.tip}>IDaaS 解决方案</span>
                <MenuItem onClick={() => productMenuGo("/#sso")}>
                    <ListItemIcon>
                        <AccountBox />
                    </ListItemIcon>
                    <ListItemText>唯ID &nbsp; SSO</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => productMenuGo("/#iam")}>
                    <ListItemIcon>
                        <Dashboard />
                    </ListItemIcon>
                    <ListItemText>唯ID &nbsp; IAM</ListItemText>
                </MenuItem>
            </Menu>
        </header>
    );
}
