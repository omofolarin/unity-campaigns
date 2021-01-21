import { Col, Row, Layout as AntLayout, Typography, Menu } from "antd";
import * as React from "react";
import { createUseStyles } from "react-jss";
import Link from "next/link";
import { useRouter } from "next/router";

const useLayoutStyles = createUseStyles({
  logo: {
    width: "12em",
    margin: "1em auto 1em auto",
  },

  sidebarContainer: {
    position: "fixed",
    height: "100vh",
    backgroundColor: "#fff",
    borderRight: "1px solid #E4E4E4",
    padding: "2em",
  },

  menuTitle: {
    fontWeight: "200 !important",
    fontSize: "14px",
  },

  menuContainer: {
    margin: "2.5em auto 2.5em 1em",
    "& .ant-menu-vertical-left": {
      borderRight: "1px solid transparent",
    },
    "& .ant-menu-item": {
      height: "3.9em",
      display: "flex",
      alignItems: "center",
      borderRadius: "8px",
      border: "1px solid transparent",
      marginLeft: "-1em",
      "&:not(:last-child)": {
        marginBottom: "0",
      },
    },

    "& .ant-menu-item:hover": {
      color: "#6C5DD3",
      "& .icon": {
        fill: "#6C5DD3 ",
      },
    },

    "& .ant-menu-item-selected": {
      backgroundColor: "#6C5DD3 !important",
      color: "#fff !important",
      "& .icon": {
        fill: "#fff !important",
      },
    },

    "& .ant-menu-item-selected: hover": {
      "& .icon": {
        fill: "#fff ",
      },
    },

    "& .icon": {
      fontSize: "12px",
      width: "1.5em",
      fill: "#808191",
    },
  },

  iconContainer: {
    display: "flex",
    color: "#808191",
  },

  menuItem: {},

  menuItemInner: {
    display: "flex",
    alignItems: "center",
  },

  mainContainer: {
    width: "100%",
    maxWidth: "5800px",
  },
});

const routes = [
  {
    title: "Overview",
    url: "/overview",
    icon: (
      <svg className="icon">
        <svg id="icon-overview" viewBox="0 0 21 22">
          <path d="M12.925 1.37a.75.75 0 0 1 .102 1.493l-.102.007H5.657c-2.455 0-4.034 1.626-4.125 4.16l-.004.233v8.082c0 2.602 1.483 4.284 3.906 4.38l.223.004h8.604c2.457 0 4.034-1.62 4.125-4.152l.004-.233v-7.04a.75.75 0 0 1 1.493-.102l.007.102v7.04c0 3.4-2.14 5.772-5.394 5.88l-.234.004H5.657c-3.33 0-5.525-2.3-5.625-5.644l-.004-.24v-8.08c0-3.392 2.142-5.78 5.394-5.9l.234-.004h7.268zM15.04 8.2a.75.75 0 0 1 .195.96l-.06.093-2.93 3.78a.75.75 0 0 1-.964.193l-.093-.062-2.82-2.214-2.53 3.3a.75.75 0 0 1-.959.198l-.093-.06a.75.75 0 0 1-.198-.959l.06-.093 2.993-3.9a.75.75 0 0 1 .965-.195l.093.062 2.82 2.215 2.467-3.183a.75.75 0 0 1 1.052-.134zM17.995.528a2.672 2.672 0 1 1 0 5.343 2.672 2.672 0 0 1 0-5.343zm0 1.5a1.172 1.172 0 1 0 0 2.345 1.172 1.172 0 0 0 0-2.345z"></path>
        </svg>
      </svg>
    ),
  },
  {
    title: "Products",
    url: "/products",
    icon: (
      <svg className="icon">
        <svg id="icon-bag" viewBox="0 0 20 21">
          <path d="M9.83.028c2.62 0 4.778 1.99 5.043 4.54h.074c1.797 0 3.3 1.36 3.82 3.73l.8 6.286c.463 3.96-1.79 6.167-5.563 6.167H5.656c-4.078 0-6.162-1.958-5.494-6.41l.784-6.082c.433-2.34 1.976-3.69 3.813-3.69a5.078 5.078 0 0 1 1.466-3.063A5.07 5.07 0 0 1 9.831.028zm5.117 6.04H4.77c-1.098 0-2.034.818-2.332 2.42l-.78 6.057c-.522 3.48.78 4.704 4.01 4.704h8.348c2.98 0 4.5-1.54 4.043-4.72L17.3 8.555c-.363-1.65-1.29-2.487-2.343-2.487zm-2.15 2.784a.75.75 0 0 1 .102 1.493l-.102.007h-.046a.75.75 0 0 1-.102-1.493l.102-.007h.046zm-5.83 0a.75.75 0 0 1 .102 1.493l-.102.007H6.92a.75.75 0 0 1-.102-1.493l.102-.007h.046zm2.862-7.324a3.57 3.57 0 0 0-3.546 3.04h7.08a3.572 3.572 0 0 0-3.534-3.04z"></path>
        </svg>
      </svg>
    ),
  },
  {
    title: "Campaigns",
    url: "/campaigns",
    icon: (
      <svg className="icon">
        <svg id="icon-chart" viewBox="0 0 22 22">
          <path d="M15.686.25c3.646 0 6.064 2.598 6.064 6.335v8.83c0 3.737-2.42 6.335-6.064 6.335h-9.37C2.67 21.75.25 19.152.25 15.415v-8.83C.25 2.85 2.675.25 6.314.25zm0 1.5h-9.37c-2.786 0-4.564 1.907-4.564 4.835v8.83c0 2.932 1.772 4.835 4.564 4.835h9.37c2.792 0 4.564-1.903 4.564-4.835v-8.83c0-2.932-1.772-4.835-4.564-4.835zM6.37 8.452a.75.75 0 0 1 .743.648l.007.102v6.86a.75.75 0 0 1-1.493.102l-.007-.102v-6.86a.75.75 0 0 1 .75-.75zm4.667-3.283a.75.75 0 0 1 .743.648l.007.102v10.143a.75.75 0 0 1-1.493.102l-.007-.102V5.92a.75.75 0 0 1 .75-.75zm4.59 6.908a.75.75 0 0 1 .743.648l.007.102v3.235a.75.75 0 0 1-1.493.102l-.007-.102v-3.235a.75.75 0 0 1 .75-.75z"></path>
        </svg>
      </svg>
    ),
  },
  {
    title: "Schedules",
    url: "/schedules",
    icon: (
      <svg className="icon">
        <svg id="icon-discovery" viewBox="0 0 21 21">
          <path d="M10.61.25c5.722 0 10.36 4.64 10.36 10.36s-4.64 10.36-10.36 10.36S.25 16.333.25 10.61 4.89.25 10.61.25zm0 1.5a8.86 8.86 0 1 0 0 17.72 8.86 8.86 0 0 0 0-17.72zm3.117 4.804a.75.75 0 0 1 .94.94l-1.593 5.09a.75.75 0 0 1-.492.492l-5.09 1.593a.75.75 0 0 1-.94-.94l1.593-5.09a.75.75 0 0 1 .492-.492zm-.92 1.86L9.46 9.46l-1.048 3.347 3.347-1.048 1.048-3.347z"></path>
        </svg>
      </svg>
    ),
  },
  {
    title: "Payouts",
    url: "/payouts",
    icon: (
      <svg className="icon">
        <svg id="icon-wallet" viewBox="0 0 22 20">
          <path d="M15.39.25a6 6 0 0 1 5.998 5.998v7.177a6 6 0 0 1-5.998 5.998H6.747A6 6 0 0 1 .75 13.425V6.248A6 6 0 0 1 6.748.25zm0 1.5H6.748A4.5 4.5 0 0 0 2.25 6.248v7.177a4.5 4.5 0 0 0 4.498 4.498h8.643a4.5 4.5 0 0 0 4.498-4.498l-.001-.28-3.298.001a3.443 3.443 0 0 1-3.442-3.44 3.442 3.442 0 0 1 3.253-3.436l.19-.005h3.297l.001-.015a4.5 4.5 0 0 0-4.286-4.493l-.212-.005zm4.497 6.013H16.59a1.943 1.943 0 0 0-1.943 1.94 1.946 1.946 0 0 0 1.8 1.936l.152.006 3.297-.001V7.763zm-2.84 1.13a.75.75 0 0 1 .102 1.493l-.102.007h-.312a.75.75 0 0 1-.102-1.493l.102-.007h.312zm-5.614-4.105a.75.75 0 0 1 .102 1.493l-.102.007h-5.4a.75.75 0 0 1-.102-1.493l.102-.007h5.4z"></path>
        </svg>
      </svg>
    ),
  },
  {
    title: "Statements",
    url: "/statements",
    icon: (
      <svg className="icon">
        <svg id="icon-document" viewBox="0 0 19 20">
          <path d="M12.91 0c3.182 0 5.257 2.142 5.257 5.357v9.196c0 3.197-2.057 5.335-5.22 5.354l-7.69.003c-3.182 0-5.256-2.14-5.256-5.357V5.357C.001 2.16 2.057.023 5.22.004zm0 1.5l-7.685.004C2.902 1.518 1.5 2.974 1.5 5.357v9.196c0 2.398 1.414 3.857 3.756 3.857l7.685-.003c2.323-.014 3.725-1.47 3.725-3.854V5.357c0-2.397-1.414-3.857-3.757-3.857zm-.193 11.974a.75.75 0 0 1 .102 1.493l-.102.007h-7.22a.75.75 0 0 1-.102-1.493l.102-.007h7.22zm0-4.187a.75.75 0 0 1 .102 1.493l-.102.007h-7.22a.75.75 0 0 1-.102-1.493l.102-.007h7.22zM8.25 5.1a.75.75 0 0 1 .102 1.493L8.25 6.6H5.496a.75.75 0 0 1-.102-1.493l.102-.007H8.25z"></path>
        </svg>
      </svg>
    ),
  },
  {
    title: "Settings",
    url: "/settings",
    icon: (
      <svg className="icon">
        <svg id="icon-settings" viewBox="0 0 20 22">
          <path d="M10.797.528c.72 0 1.41.29 1.91.807s.773 1.213.75 1.864l.01.153c.018.15.067.296.146.43.155.264.41.456.705.533s.612.033.9-.142l.166-.086a2.666 2.666 0 0 1 3.44 1.08l.622 1.08a.75.75 0 0 1 .043.088l.058.116a2.66 2.66 0 0 1-.897 3.32l-.26.164c-.137.095-.25.22-.336.37-.155.265-.197.58-.118.878s.273.55.568.72l.17.11c.512.358.882.886 1.043 1.49a2.66 2.66 0 0 1-.276 2.028l-.67 1.115-.1.157c-.787 1.13-2.314 1.477-3.48.804l-.138-.07c-.144-.064-.3-.1-.44-.104a1.144 1.144 0 0 0-.82.338 1.18 1.18 0 0 0-.339.857l-.008.178a2.663 2.663 0 0 1-2.654 2.444H9.538c-1.47 0-2.663-1.192-2.662-2.616l-.01-.153a1.117 1.117 0 0 0-.15-.437c-.152-.265-.403-.458-.698-.537s-.61-.037-.913.14l-.18.1a2.666 2.666 0 0 1-3.414-1.125L.87 15.494l-.086-.166c-.59-1.244-.127-2.74 1.045-3.416l.107-.067c.313-.217.5-.574.5-.956 0-.416-.222-.8-.61-1.024l-.157-.1a2.668 2.668 0 0 1-.775-3.531l.66-1.083a2.654 2.654 0 0 1 3.606-.995l.135.072c.138.063.288.097.432.098.636 0 1.154-.51 1.164-1.165v-.2A2.655 2.655 0 0 1 9.535.529zm0 1.5H9.543c-.307 0-.6.122-.818.34a1.14 1.14 0 0 0-.33.685l-.014.316A2.664 2.664 0 0 1 5.72 5.827a2.61 2.61 0 0 1-1.085-.253l-.195-.103a1.166 1.166 0 0 0-1.595.444l-.66 1.083c-.302.524-.15 1.192.317 1.518l.265.168a2.66 2.66 0 0 1 1.17 2.206c0 .875-.43 1.693-1.173 2.206l-.158.1c-.52.3-.722.952-.48 1.464l.057.1.64 1.102c.15.27.402.47.7.555a1.15 1.15 0 0 0 .765-.044l.1-.054c.61-.356 1.335-.453 2.017-.27s1.262.63 1.606 1.23c.185.312.302.66.348 1.06l.02.366a1.163 1.163 0 0 0 1.156 1.036h1.254c.606 0 1.1-.466 1.157-1.037l.006-.113c-.003-.708.276-1.388.777-1.89s1.18-.78 1.906-.777c.356.01.705.09 1.063.25l.32.164c.503.22 1.1.06 1.403-.374l.074-.115.654-1.1c.155-.265.197-.582.118-.878a1.14 1.14 0 0 0-.426-.63l-.114-.073a2.645 2.645 0 0 1-1.24-1.617 2.65 2.65 0 0 1 .268-2.015c.193-.337.46-.627.805-.867l.163-.103c.52-.304.72-.954.48-1.468l-.072-.138-.013-.03-.594-1.03a1.164 1.164 0 0 0-1.36-.532l-.113.045-.105.053a2.649 2.649 0 0 1-2.014.282 2.65 2.65 0 0 1-1.62-1.223 2.63 2.63 0 0 1-.348-1.058l-.013-.26c.01-.314-.11-.62-.33-.844s-.52-.352-.835-.352zm-.622 5.475a3.386 3.386 0 1 1-.002 6.77 3.386 3.386 0 0 1 .003-6.769zm0 1.5a1.885 1.885 0 1 0-.001 3.771 1.885 1.885 0 0 0 .001-3.771z"></path>
        </svg>
      </svg>
    ),
  },
];

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout(props: LayoutProps) {
  const { children } = props;
  const { Sider, Content } = AntLayout;
  const { Title } = Typography;
  const classes = useLayoutStyles();
  const route = useRouter();

  return (
    <AntLayout>
      <Row>
        <Col span={5} xs={0} md={0} xl={5}>
          <div style={{ backgroundColor: "yellow", width: "100%" }}>
            <AntLayout>
              <Sider width="256px" className={classes.sidebarContainer}>
                <div className={classes.logo}>
                  <img src="/logo.png" alt="logo" style={{ width: "100%" }} />
                </div>
                <div className={classes.menuContainer}>
                  <p className={classes.menuTitle}>Admin tools</p>

                  <Menu mode="vertical-left">
                    {routes.map((item, i) => {
                      const pathname = `/contents${item.url}`;
                      const active =
                        pathname === route.asPath
                          ? "ant-menu-item-selected"
                          : "";

                      return (
                        <Menu.Item
                          key={i.toString()}
                          className={[classes.menuItem, active].join(" ")}
                        >
                          <Link href={pathname}>
                            <div className={classes.menuItemInner}>
                              <div className={classes.iconContainer}>
                                {item.icon}
                              </div>
                              <div style={{ marginLeft: "1em" }}>
                                {item.title}
                              </div>
                            </div>
                          </Link>
                        </Menu.Item>
                      );
                    })}
                  </Menu>
                </div>
              </Sider>
            </AntLayout>
          </div>
        </Col>
        <Col span={19} xs={24} lg={19}>
          <Content className={classes.mainContainer}>{children}</Content>
        </Col>
      </Row>
    </AntLayout>
  );
}
