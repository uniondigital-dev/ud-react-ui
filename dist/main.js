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
$parcel$export(module.exports, "Button", () => $24cf76bc329384dd$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Container", () => $f32c7848c29308c0$export$2e2bcd8739ae039);
$parcel$export(module.exports, "ContentCard", () => $6563f807c4cd184b$export$2e2bcd8739ae039);
$parcel$export(module.exports, "ContentCardList", () => $2cd3fd31530cc318$export$2e2bcd8739ae039);
$parcel$export(module.exports, "LoanCard", () => $d9b0acdb1f0cb83d$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Title", () => $184cd3bea746e74f$export$2e2bcd8739ae039);
$parcel$export(module.exports, "VSpace", () => $73eaeef512cc934c$export$2e2bcd8739ae039);




function $e00a23217c74ccb9$var$Avatar({ avatarUrl: avatarUrl , hasBorder: hasBorder , ...rest }) {
    return(/*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("img", {
        className: ($parcel$interopDefault($fbsOk$classnames))('h-10 w-10 object-cover rounded-full ', {
            'border-2 border-white': hasBorder
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
        className: "flex space-x-2 items-center",
        onClick: onClick,
        __source: {
            fileName: "Dev/ud-miniapp-components/src/components/AvatarList.js",
            lineNumber: 7,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("div", {
                className: "flex -space-x-2",
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
                className: "text-sm",
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






const $24cf76bc329384dd$var$BUTTON_SIZE = {
    xs: 'text-xs px-3 py-2',
    sm: 'text-sm px-3 py-2',
    base: 'text-sm px-5 py-2.5',
    large: 'text-base font-medium px-5 py-3',
    extraLarge: 'text-base font-medium px-6 py-3.5'
};
const $24cf76bc329384dd$var$BUTTON_VARIANT = {
    primary: 'bg-primary text-white hover:bg-primary-dark disabled:bg-gray-200 disabled:text-gray-400',
    danger: 'bg-red-100 text-red-800 hover:bg-red-200 disabled:bg-gray-200 disabled:text-gray-400',
    success: 'bg-green-100 text-green-800 hover:bg-green-200 disabled:bg-gray-200 disabled:text-gray-400',
    link: 'text-primary underline hover:text-primary-dark disabled:bg-gray-200 disabled:text-gray-400 !p-0'
};
function $24cf76bc329384dd$var$Button({ variant: variant = 'primary' , size: size = 'base' , children: children , className: className , block: block = false , ...rest }) {
    return(/*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("button", {
        ...rest,
        className: ($parcel$interopDefault($fbsOk$classnames))('rounded-md font-sans', $24cf76bc329384dd$var$BUTTON_VARIANT[variant], $24cf76bc329384dd$var$BUTTON_SIZE[size], className, {
            'block w-full': block
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
        'danger',
        'success',
        'link'
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
    block: ($parcel$interopDefault($fbsOk$proptypes)).bool
};
var $24cf76bc329384dd$export$2e2bcd8739ae039 = $24cf76bc329384dd$var$Button;





// TODO: Add option to adjust the min height of container to full screen
function $f32c7848c29308c0$var$Container({ children: children  }) {
    return(/*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("div", {
        className: "container px-6 py-6 mx-auto",
        __source: {
            fileName: "Dev/ud-miniapp-components/src/components/Container.js",
            lineNumber: 6,
            columnNumber: 10
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
        className: "flex flex-col rounded-lg w-64 bg-white shadow-md group hover:bg-danger cursor-pointer overflow-hidden",
        onClick: onClick,
        __source: {
            fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
            lineNumber: 8,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ $fbsOk$reactjsxruntime.jsxs("div", {
                className: "relative h-40",
                __source: {
                    fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
                    lineNumber: 12,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("div", {
                        className: "absolute w-64 h-40 bg-slate-400/20",
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
                            lineNumber: 13,
                            columnNumber: 9
                        },
                        __self: this
                    }),
                    coverUrl ? /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("img", {
                        className: "w-64 h-40",
                        src: coverUrl,
                        alt: "image cover",
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
                            lineNumber: 15,
                            columnNumber: 11
                        },
                        __self: this
                    }) : /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("div", {
                        className: " w-64 h-40 bg-primary/20",
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
                            lineNumber: 17,
                            columnNumber: 11
                        },
                        __self: this
                    }),
                    /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("div", {
                        className: "absolute right-2 top-2",
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
                className: "flex flex-col space-y-1 px-4 py-3",
                __source: {
                    fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
                    lineNumber: 23,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("h2", {
                        className: "text-black font-semibold group-hover:text-primary",
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
                            lineNumber: 24,
                            columnNumber: 9
                        },
                        __self: this,
                        children: title
                    }),
                    /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("p", {
                        className: "text-sm text-black",
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
        className: "text-lg font-bold text-black",
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
        className: ($parcel$interopDefault($fbsOk$classnames))('flex flex-col space-y-2', {
            'container mx-auto pl-6 ': hasPadding
        }),
        __source: {
            fileName: "Dev/ud-miniapp-components/src/components/ContentCardList.js",
            lineNumber: 18,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ $fbsOk$reactjsxruntime.jsxs("div", {
                className: "flex items-center justify-between",
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
                            'mr-6': hasPadding
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
                className: "flex space-x-2 overflow-x-scroll",
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
        className: "bg-danger px-4 py-6 rounded-lg shadow-sm",
        __source: {
            fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
            lineNumber: 9,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ $fbsOk$reactjsxruntime.jsxs("div", {
                className: "flex justify-between items-center w-full",
                __source: {
                    fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
                    lineNumber: 10,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $fbsOk$reactjsxruntime.jsxs("p", {
                        className: "text-primary text-base capitalize",
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
                className: "mt-3 text-3xl text-black font-semibold",
                __source: {
                    fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
                    lineNumber: 16,
                    columnNumber: 7
                },
                __self: this,
                children: amount
            }),
            /*#__PURE__*/ $fbsOk$reactjsxruntime.jsxs("div", {
                className: "flex justify-between mt-5",
                __source: {
                    fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
                    lineNumber: 17,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $fbsOk$reactjsxruntime.jsxs("div", {
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
                            lineNumber: 18,
                            columnNumber: 9
                        },
                        __self: this,
                        children: [
                            /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("p", {
                                className: "text-xs text-primary uppercase",
                                __source: {
                                    fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
                                    lineNumber: 19,
                                    columnNumber: 11
                                },
                                __self: this,
                                children: "NEXT SCHEDULED PAYMENT"
                            }),
                            /*#__PURE__*/ $fbsOk$reactjsxruntime.jsx("p", {
                                className: "text-base text-black font-bold",
                                __source: {
                                    fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
                                    lineNumber: 22,
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
                            lineNumber: 24,
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
    xs: 'mt-1',
    sm: 'mt-2',
    base: 'mt-3',
    large: 'mt-4',
    extraLarge: 'mt-5'
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




