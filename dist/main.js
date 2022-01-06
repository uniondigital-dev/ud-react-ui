var $fbsOk$reactjsxruntime = require("react/jsx-runtime");
require("react");
var $fbsOk$proptypes = require("prop-types");
var $fbsOk$classnames = require("classnames");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Avatar", () => $e00a23217c74ccb9$export$2e2bcd8739ae039);
$parcel$export(module.exports, "AvatarList", () => $aae2cdbdcba990b9$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Badge", () => $e1218bb755e43134$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Button", () => $24cf76bc329384dd$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Container", () => $f32c7848c29308c0$export$2e2bcd8739ae039);
$parcel$export(module.exports, "ContentCard", () => $6563f807c4cd184b$export$2e2bcd8739ae039);
$parcel$export(module.exports, "ContentCardList", () => $2cd3fd31530cc318$export$2e2bcd8739ae039);
$parcel$export(module.exports, "LoanCard", () => $d9b0acdb1f0cb83d$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Title", () => $184cd3bea746e74f$export$2e2bcd8739ae039);
$parcel$export(module.exports, "VSpace", () => $73eaeef512cc934c$export$2e2bcd8739ae039);




function $e00a23217c74ccb9$var$Avatar({ avatarUrl: avatarUrl , hasBorder: hasBorder , ...rest }) {
    return(/*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("img", {
        ...rest,
        className: ($parcel$interopDefault($fbsOk$classnames))('ud-h-10 ud-w-10 ud-object-cover ud-rounded-full', {
            'ud-border-2 ud-border-white': hasBorder
        }),
        src: avatarUrl,
        alt: `avatar`,
        __source: {
            fileName: "Dev/ud-miniapp-components/src/components/Avatar.js",
            lineNumber: 7,
            columnNumber: 5
        },
        __self: this
    }));
}
$e00a23217c74ccb9$var$Avatar.propTypes = {
    avatarUrl: ($parcel$interopDefault($fbsOk$proptypes)).string.isRequired,
    hasBorder: ($parcel$interopDefault($fbsOk$proptypes)).bool
};
var $e00a23217c74ccb9$export$2e2bcd8739ae039 = $e00a23217c74ccb9$var$Avatar;






function $aae2cdbdcba990b9$var$AvatarList({ users: users , label: label , onClick: onClick  }) {
    return(/*#__PURE__*/ $fbsOk$reactjsxruntime.jsxs("div", {
        className: "ud-flex ud-space-x-2 ud-items-center",
        onClick: onClick,
        __source: {
            fileName: "Dev/ud-miniapp-components/src/components/AvatarList.js",
            lineNumber: 7,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("div", {
                className: "ud-flex ud--space-x-2",
                __source: {
                    fileName: "Dev/ud-miniapp-components/src/components/AvatarList.js",
                    lineNumber: 8,
                    columnNumber: 7
                },
                __self: this,
                children: users.slice(0, 3).map((user, index)=>/*#__PURE__*/ $fbsOk$reactjsxruntime.jsx($e00a23217c74ccb9$export$2e2bcd8739ae039, {
                        avatarUrl: user.avatarUrl,
                        hasBorder: true,
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/AvatarList.js",
                            lineNumber: 10,
                            columnNumber: 11
                        },
                        __self: this
                    }, index)
                )
            }),
            /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("p", {
                className: "ud-text-sm",
                __source: {
                    fileName: "Dev/ud-miniapp-components/src/components/AvatarList.js",
                    lineNumber: 13,
                    columnNumber: 7
                },
                __self: this,
                children: label
            })
        ]
    }));
}
$aae2cdbdcba990b9$var$AvatarList.propTypes = {
    users: ($parcel$interopDefault($fbsOk$proptypes)).array.isRequired,
    label: ($parcel$interopDefault($fbsOk$proptypes)).string.isRequired,
    onClick: ($parcel$interopDefault($fbsOk$proptypes)).func
};
var $aae2cdbdcba990b9$export$2e2bcd8739ae039 = $aae2cdbdcba990b9$var$AvatarList;






const $e1218bb755e43134$var$SIZE = {
    xs: 'ud-text-[10px] ud-px-2.5 ud-py-0.5',
    sm: 'ud-text-xs ud-px-2.5 ud-py-0.5 '
};
const $e1218bb755e43134$var$VARIANT = {
    primary: 'ud-bg-primary ud-text-white',
    info: 'ud-bg-info ud-text-white',
    danger: 'ud-bg-danger ud-text-white',
    warning: 'ud-bg-warning ud-text-black',
    success: 'ud-bg-success ud-text-white'
};
function $e1218bb755e43134$var$Badge({ variant: variant = 'primary' , size: size = 'sm' , children: children , onClick: onClick , ...rest }) {
    return(/*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("span", {
        onClick: onClick,
        className: ($parcel$interopDefault($fbsOk$classnames))('ud-rounded-full ', $e1218bb755e43134$var$VARIANT[variant], $e1218bb755e43134$var$SIZE[size]),
        ...rest,
        __source: {
            fileName: "Dev/ud-miniapp-components/src/components/Badge.js",
            lineNumber: 26,
            columnNumber: 5
        },
        __self: this,
        children: children
    }));
}
$e1218bb755e43134$var$Badge.propTypes = {
    variant: ($parcel$interopDefault($fbsOk$proptypes)).oneOf([
        'primary',
        'info',
        'danger',
        'warning',
        'success'
    ]),
    children: ($parcel$interopDefault($fbsOk$proptypes)).node,
    onClick: ($parcel$interopDefault($fbsOk$proptypes)).func
};
var $e1218bb755e43134$export$2e2bcd8739ae039 = $e1218bb755e43134$var$Badge;






const $24cf76bc329384dd$var$BUTTON_SIZE = {
    xs: 'ud-text-xs ud-px-3 ud-py-2 ',
    sm: 'ud-text-sm ud-px-3 ud-py-2',
    base: 'ud-text-sm ud-px-5 ud-py-2.5',
    large: 'ud-text-base ud-font-medium ud-px-5 ud-py-3',
    extraLarge: 'ud-text-base ud-font-medium ud-px-6 ud-py-3.5'
};
const $24cf76bc329384dd$var$BUTTON_VARIANT = {
    primary: 'ud-bg-primary ud-text-white hover:ud-bg-primary-dark',
    info: 'ud-bg-info ud-text-white hover:ud-bg-info-dark',
    danger: 'ud-bg-danger ud-text-white hover:ud-bg-danger-dark',
    warning: 'ud-bg-warning ud-text-black hover:ud-bg-warning-dark',
    success: 'ud-bg-success ud-text-white hover:ud-bg-success-dark',
    link: 'ud-text-primary ud-underline ud-bg-transparent hover:ud-text-primary-dark !ud-p-0'
};
function $24cf76bc329384dd$var$Button({ variant: variant = 'primary' , size: size = 'base' , children: children , className: className , block: block = false , disabled: disabled = false , ...rest }) {
    return(/*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("button", {
        ...rest,
        type: "button",
        disabled: disabled,
        className: ($parcel$interopDefault($fbsOk$classnames))('ud-rounded-md ud-font-sans ud-border-0 ud-cursor-pointer disabled:ud-opacity-75 disabled:ud-cursor-not-allowed', $24cf76bc329384dd$var$BUTTON_VARIANT[variant], $24cf76bc329384dd$var$BUTTON_SIZE[size], className, {
            'ud-block ud-w-full': block
        }),
        __source: {
            fileName: "Dev/ud-miniapp-components/src/components/Button.js",
            lineNumber: 32,
            columnNumber: 5
        },
        __self: this,
        children: children
    }));
}
$24cf76bc329384dd$var$Button.variant = $24cf76bc329384dd$var$BUTTON_VARIANT;
$24cf76bc329384dd$var$Button.size = $24cf76bc329384dd$var$BUTTON_SIZE;
$24cf76bc329384dd$var$Button.propTypes = {
    variant: ($parcel$interopDefault($fbsOk$proptypes)).oneOf([
        'primary',
        'info',
        'danger',
        'warning',
        'success',
        'link', 
    ]),
    size: ($parcel$interopDefault($fbsOk$proptypes)).oneOf([
        'xs',
        'sm',
        'base',
        'large',
        'extraLarge'
    ]),
    children: ($parcel$interopDefault($fbsOk$proptypes)).node,
    className: ($parcel$interopDefault($fbsOk$proptypes)).string,
    block: ($parcel$interopDefault($fbsOk$proptypes)).bool,
    disabled: ($parcel$interopDefault($fbsOk$proptypes)).bool
};
var $24cf76bc329384dd$export$2e2bcd8739ae039 = $24cf76bc329384dd$var$Button;





// TODO: Add option to adjust the min height of container to full screen
function $f32c7848c29308c0$var$Container({ children: children  }) {
    return(/*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("div", {
        className: "ud-container ud-px-6 ud-py-6 ud-mx-auto",
        __source: {
            fileName: "Dev/ud-miniapp-components/src/components/Container.js",
            lineNumber: 7,
            columnNumber: 5
        },
        __self: this,
        children: children
    }));
}
$f32c7848c29308c0$var$Container.propTypes = {
    children: ($parcel$interopDefault($fbsOk$proptypes)).node.isRequired
};
var $f32c7848c29308c0$export$2e2bcd8739ae039 = $f32c7848c29308c0$var$Container;






function $6563f807c4cd184b$var$ContentCard({ avatarUrl: avatarUrl , coverUrl: coverUrl , title: title , shortDesc: shortDesc , onClick: onClick  }) {
    return(/*#__PURE__*/ $fbsOk$reactjsxruntime.jsxs("article", {
        className: "ud-flex ud-flex-col ud-rounded-lg ud-w-64 ud-bg-white ud-shadow-md ud-group hover:ud-bg-warning ud-cursor-pointer ud-overflow-hidden",
        onClick: onClick,
        __source: {
            fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
            lineNumber: 8,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ $fbsOk$reactjsxruntime.jsxs("div", {
                className: "ud-relative ud-h-40",
                __source: {
                    fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
                    lineNumber: 12,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("div", {
                        className: "ud-absolute ud-w-64 ud-h-40 ud-bg-slate-400/20",
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
                            lineNumber: 13,
                            columnNumber: 9
                        },
                        __self: this
                    }),
                    coverUrl ? /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("img", {
                        className: "ud-w-64 ud-h-40",
                        src: coverUrl,
                        alt: "image cover",
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
                            lineNumber: 15,
                            columnNumber: 11
                        },
                        __self: this
                    }) : /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("div", {
                        className: "ud-w-64 ud-h-40 ud-bg-primary/20",
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
                            lineNumber: 17,
                            columnNumber: 11
                        },
                        __self: this
                    }),
                    /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("div", {
                        className: "ud-absolute ud-right-2 ud-top-2",
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
                            lineNumber: 19,
                            columnNumber: 9
                        },
                        __self: this,
                        children: /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx($e00a23217c74ccb9$export$2e2bcd8739ae039, {
                            avatarUrl: avatarUrl,
                            __source: {
                                fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
                                lineNumber: 20,
                                columnNumber: 11
                            },
                            __self: this
                        })
                    })
                ]
            }),
            /*#__PURE__*/ $fbsOk$reactjsxruntime.jsxs("div", {
                className: "ud-flex ud-flex-col ud-space-y-1 ud-px-4 ud-py-3",
                __source: {
                    fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
                    lineNumber: 23,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("h2", {
                        className: "ud-text-black ud-font-semibold group-hover:ud-text-primary",
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
                            lineNumber: 24,
                            columnNumber: 9
                        },
                        __self: this,
                        children: title
                    }),
                    /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("p", {
                        className: "ud-text-sm ud-text-black",
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
                            lineNumber: 27,
                            columnNumber: 9
                        },
                        __self: this,
                        children: shortDesc
                    })
                ]
            })
        ]
    }));
}
$6563f807c4cd184b$var$ContentCard.propTypes = {
    avatarUrl: ($parcel$interopDefault($fbsOk$proptypes)).string.isRequired,
    coverUrl: ($parcel$interopDefault($fbsOk$proptypes)).string.isRequired,
    title: ($parcel$interopDefault($fbsOk$proptypes)).string.isRequired,
    shortDesc: ($parcel$interopDefault($fbsOk$proptypes)).string.isRequired,
    onClick: ($parcel$interopDefault($fbsOk$proptypes)).func
};
var $6563f807c4cd184b$export$2e2bcd8739ae039 = $6563f807c4cd184b$var$ContentCard;











function $184cd3bea746e74f$var$Title({ children: children  }) {
    return(/*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("h1", {
        className: "ud-text-lg ud-font-bold ud-text-black",
        __source: {
            fileName: "Dev/ud-miniapp-components/src/components/Title.js",
            lineNumber: 6,
            columnNumber: 10
        },
        __self: this,
        children: children
    }));
}
$184cd3bea746e74f$var$Title.propTypes = {
    children: ($parcel$interopDefault($fbsOk$proptypes)).oneOfType([
        ($parcel$interopDefault($fbsOk$proptypes)).string
    ]).isRequired
};
var $184cd3bea746e74f$export$2e2bcd8739ae039 = $184cd3bea746e74f$var$Title;



function $2cd3fd31530cc318$var$ContentCardList({ title: title , items: items , onItemClick: onItemClick , ctaText: ctaText , onCtaClick: onCtaClick , hasPadding: hasPadding ,  }) {
    return(/*#__PURE__*/ $fbsOk$reactjsxruntime.jsxs("div", {
        className: ($parcel$interopDefault($fbsOk$classnames))('ud-flex ud-flex-col ud-space-y-2', {
            'ud-container ud-mx-auto ud-pl-6 ': hasPadding
        }),
        __source: {
            fileName: "Dev/ud-miniapp-components/src/components/ContentCardList.js",
            lineNumber: 18,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ $fbsOk$reactjsxruntime.jsxs("div", {
                className: "ud-flex ud-items-center ud-justify-between",
                __source: {
                    fileName: "Dev/ud-miniapp-components/src/components/ContentCardList.js",
                    lineNumber: 23,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx($184cd3bea746e74f$export$2e2bcd8739ae039, {
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/ContentCardList.js",
                            lineNumber: 24,
                            columnNumber: 9
                        },
                        __self: this,
                        children: title
                    }),
                    /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx($24cf76bc329384dd$export$2e2bcd8739ae039, {
                        variant: "link",
                        className: ($parcel$interopDefault($fbsOk$classnames))({
                            'ud-mr-6': hasPadding
                        }),
                        onClick: onCtaClick,
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/ContentCardList.js",
                            lineNumber: 25,
                            columnNumber: 9
                        },
                        __self: this,
                        children: ctaText
                    })
                ]
            }),
            /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("div", {
                className: "ud-flex ud-space-x-2 ud-overflow-x-scroll",
                __source: {
                    fileName: "Dev/ud-miniapp-components/src/components/ContentCardList.js",
                    lineNumber: 35,
                    columnNumber: 7
                },
                __self: this,
                children: items.map((item, index)=>/*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("div", {
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/ContentCardList.js",
                            lineNumber: 37,
                            columnNumber: 11
                        },
                        __self: this,
                        children: /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx($6563f807c4cd184b$export$2e2bcd8739ae039, {
                            avatarUrl: item.avatarUrl,
                            coverUrl: item.coverUrl,
                            title: item.title,
                            shortDesc: item.shortDesc,
                            onClick: ()=>onItemClick(item)
                            ,
                            __source: {
                                fileName: "Dev/ud-miniapp-components/src/components/ContentCardList.js",
                                lineNumber: 38,
                                columnNumber: 13
                            },
                            __self: this
                        })
                    }, index)
                )
            })
        ]
    }));
}
$2cd3fd31530cc318$var$ContentCardList.propTypes = {
    title: ($parcel$interopDefault($fbsOk$proptypes)).string,
    items: ($parcel$interopDefault($fbsOk$proptypes)).array.isRequired,
    onItemClick: ($parcel$interopDefault($fbsOk$proptypes)).func,
    ctaText: ($parcel$interopDefault($fbsOk$proptypes)).string,
    onCtaClick: ($parcel$interopDefault($fbsOk$proptypes)).func,
    hasPadding: ($parcel$interopDefault($fbsOk$proptypes)).bool
};
var $2cd3fd31530cc318$export$2e2bcd8739ae039 = $2cd3fd31530cc318$var$ContentCardList;







function $d9b0acdb1f0cb83d$var$LoanCard({ firstName: firstName , avatarUrl: avatarUrl , amount: amount , paymentDate: paymentDate , onPay: onPay  }) {
    return(/*#__PURE__*/ $fbsOk$reactjsxruntime.jsxs("div", {
        className: "ud-bg-warning ud-px-4 ud-py-6 ud-rounded-lg ud-shadow-sm",
        __source: {
            fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
            lineNumber: 9,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ $fbsOk$reactjsxruntime.jsxs("div", {
                className: "ud-flex ud-justify-between ud-items-center ud-w-full",
                __source: {
                    fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
                    lineNumber: 10,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $fbsOk$reactjsxruntime.jsxs("p", {
                        className: "ud-text-primary ud-text-base ud-capitalize",
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
                            lineNumber: 11,
                            columnNumber: 9
                        },
                        __self: this,
                        children: [
                            firstName,
                            " Personal loan"
                        ]
                    }),
                    /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx($e00a23217c74ccb9$export$2e2bcd8739ae039, {
                        avatarUrl: avatarUrl,
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
                            lineNumber: 14,
                            columnNumber: 9
                        },
                        __self: this
                    })
                ]
            }),
            /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("h2", {
                className: "ud-mt-3 ud-text-3xl ud-text-black ud-font-semibold",
                __source: {
                    fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
                    lineNumber: 16,
                    columnNumber: 7
                },
                __self: this,
                children: amount
            }),
            /*#__PURE__*/ $fbsOk$reactjsxruntime.jsxs("div", {
                className: "ud-flex ud-justify-between ud-mt-5",
                __source: {
                    fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
                    lineNumber: 19,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $fbsOk$reactjsxruntime.jsxs("div", {
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
                            lineNumber: 20,
                            columnNumber: 9
                        },
                        __self: this,
                        children: [
                            /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("p", {
                                className: "ud-text-xs ud-text-primary ud-uppercase",
                                __source: {
                                    fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
                                    lineNumber: 21,
                                    columnNumber: 11
                                },
                                __self: this,
                                children: "NEXT SCHEDULED PAYMENT"
                            }),
                            /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("p", {
                                className: "ud-text-base ud-text-black ud-font-bold",
                                __source: {
                                    fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
                                    lineNumber: 24,
                                    columnNumber: 11
                                },
                                __self: this,
                                children: paymentDate
                            })
                        ]
                    }),
                    /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx($24cf76bc329384dd$export$2e2bcd8739ae039, {
                        onClick: onPay,
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
                            lineNumber: 28,
                            columnNumber: 9
                        },
                        __self: this,
                        children: "Pay"
                    })
                ]
            })
        ]
    }));
}
$d9b0acdb1f0cb83d$var$LoanCard.propTypes = {
    firstName: ($parcel$interopDefault($fbsOk$proptypes)).string.isRequired,
    avatarUrl: ($parcel$interopDefault($fbsOk$proptypes)).string.isRequired,
    amount: ($parcel$interopDefault($fbsOk$proptypes)).string.isRequired,
    paymentDate: ($parcel$interopDefault($fbsOk$proptypes)).string.isRequired,
    onPay: ($parcel$interopDefault($fbsOk$proptypes)).func
};
var $d9b0acdb1f0cb83d$export$2e2bcd8739ae039 = $d9b0acdb1f0cb83d$var$LoanCard;







const $73eaeef512cc934c$var$SPACE_SIZE = {
    xs: 'ud-mt-1',
    sm: 'ud-mt-2',
    base: 'ud-mt-3',
    large: 'ud-mt-4',
    extraLarge: 'ud-mt-5'
};
function $73eaeef512cc934c$var$VSpace({ size: size = 'extraLarge'  }) {
    return(/*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("div", {
        className: ($parcel$interopDefault($fbsOk$classnames))($73eaeef512cc934c$var$SPACE_SIZE[size]),
        __source: {
            fileName: "Dev/ud-miniapp-components/src/components/VSpace.js",
            lineNumber: 14,
            columnNumber: 10
        },
        __self: this
    }));
}
$73eaeef512cc934c$var$VSpace.propTypes = {
    size: ($parcel$interopDefault($fbsOk$proptypes)).oneOf([
        'xs',
        'sm',
        'base',
        'large',
        'extraLarge'
    ])
};
var $73eaeef512cc934c$export$2e2bcd8739ae039 = $73eaeef512cc934c$var$VSpace;




