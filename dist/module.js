import {jsx as $7pxzy$jsx, jsxs as $7pxzy$jsxs} from "react/jsx-runtime";
import "react";
import $7pxzy$proptypes from "prop-types";
import $7pxzy$classnames from "classnames";





function $cd9b2ab9f8bfcd29$var$Avatar({ avatarUrl: avatarUrl , hasBorder: hasBorder , ...rest }) {
    return(/*#__PURE__*/ $7pxzy$jsx("img", {
        ...rest,
        className: $7pxzy$classnames('ud-h-10 ud-w-10 ud-object-cover ud-rounded-full', {
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
$cd9b2ab9f8bfcd29$var$Avatar.propTypes = {
    avatarUrl: $7pxzy$proptypes.string.isRequired,
    hasBorder: $7pxzy$proptypes.bool
};
var $cd9b2ab9f8bfcd29$export$2e2bcd8739ae039 = $cd9b2ab9f8bfcd29$var$Avatar;






function $625231aee116e27a$var$AvatarList({ users: users , label: label , onClick: onClick  }) {
    return(/*#__PURE__*/ $7pxzy$jsxs("div", {
        className: "ud-flex ud-space-x-2 ud-items-center",
        onClick: onClick,
        __source: {
            fileName: "Dev/ud-miniapp-components/src/components/AvatarList.js",
            lineNumber: 7,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ $7pxzy$jsx("div", {
                className: "ud-flex ud--space-x-2",
                __source: {
                    fileName: "Dev/ud-miniapp-components/src/components/AvatarList.js",
                    lineNumber: 8,
                    columnNumber: 7
                },
                __self: this,
                children: users.slice(0, 3).map((user, index)=>/*#__PURE__*/ $7pxzy$jsx($cd9b2ab9f8bfcd29$export$2e2bcd8739ae039, {
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
            /*#__PURE__*/ $7pxzy$jsx("p", {
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
$625231aee116e27a$var$AvatarList.propTypes = {
    users: $7pxzy$proptypes.array.isRequired,
    label: $7pxzy$proptypes.string.isRequired,
    onClick: $7pxzy$proptypes.func
};
var $625231aee116e27a$export$2e2bcd8739ae039 = $625231aee116e27a$var$AvatarList;






const $21d9cf92651b4335$var$BUTTON_SIZE = {
    xs: 'ud-text-xs ud-px-3 ud-py-2 ',
    sm: 'ud-text-sm ud-px-3 ud-py-2',
    base: 'ud-text-sm ud-px-5 ud-py-2.5',
    large: 'ud-text-base ud-font-medium ud-px-5 ud-py-3',
    extraLarge: 'ud-text-base ud-font-medium ud-px-6 ud-py-3.5'
};
const $21d9cf92651b4335$var$BUTTON_VARIANT = {
    primary: 'ud-bg-primary ud-text-white hover:ud-bg-primary-dark',
    danger: 'ud-bg-red-100 ud-text-red-800 hover:ud-bg-red-200',
    warning: 'ud-bg-yellow-100 ud-text-yellow-800 hover:ud-bg-yellow-200',
    success: 'ud-bg-green-100 ud-text-green-800 hover:ud-bg-green-200',
    link: 'ud-text-primary ud-underline ud-bg-transparent hover:ud-text-primary-dark !ud-p-0'
};
function $21d9cf92651b4335$var$Button({ variant: variant = 'primary' , size: size = 'base' , children: children , className: className , block: block = false , disabled: disabled = false , ...rest }) {
    return(/*#__PURE__*/ $7pxzy$jsx("button", {
        ...rest,
        type: "button",
        disabled: disabled,
        className: $7pxzy$classnames('ud-rounded-md ud-font-sans ud-border-0 ud-cursor-pointer disabled:ud-opacity-75 disabled:ud-cursor-not-allowed', $21d9cf92651b4335$var$BUTTON_VARIANT[variant], $21d9cf92651b4335$var$BUTTON_SIZE[size], className, {
            'ud-block ud-w-full': block
        }),
        __source: {
            fileName: "Dev/ud-miniapp-components/src/components/Button.js",
            lineNumber: 31,
            columnNumber: 5
        },
        __self: this,
        children: children
    }));
}
$21d9cf92651b4335$var$Button.variant = $21d9cf92651b4335$var$BUTTON_VARIANT;
$21d9cf92651b4335$var$Button.size = $21d9cf92651b4335$var$BUTTON_SIZE;
$21d9cf92651b4335$var$Button.propTypes = {
    variant: $7pxzy$proptypes.oneOf([
        'primary',
        'danger',
        'warning',
        'success',
        'link'
    ]),
    size: $7pxzy$proptypes.oneOf([
        'xs',
        'sm',
        'base',
        'large',
        'extraLarge'
    ]),
    children: $7pxzy$proptypes.node,
    className: $7pxzy$proptypes.string,
    block: $7pxzy$proptypes.bool,
    disabled: $7pxzy$proptypes.bool
};
var $21d9cf92651b4335$export$2e2bcd8739ae039 = $21d9cf92651b4335$var$Button;





// TODO: Add option to adjust the min height of container to full screen
function $8e29fa5c29f068a1$var$Container({ children: children  }) {
    return(/*#__PURE__*/ $7pxzy$jsx("div", {
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
$8e29fa5c29f068a1$var$Container.propTypes = {
    children: $7pxzy$proptypes.node.isRequired
};
var $8e29fa5c29f068a1$export$2e2bcd8739ae039 = $8e29fa5c29f068a1$var$Container;






function $d58f8462e748373e$var$ContentCard({ avatarUrl: avatarUrl , coverUrl: coverUrl , title: title , shortDesc: shortDesc , onClick: onClick  }) {
    return(/*#__PURE__*/ $7pxzy$jsxs("article", {
        className: "ud-flex ud-flex-col ud-rounded-lg ud-w-64 ud-bg-white ud-shadow-md ud-group hover:ud-bg-danger ud-cursor-pointer ud-overflow-hidden",
        onClick: onClick,
        __source: {
            fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
            lineNumber: 8,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ $7pxzy$jsxs("div", {
                className: "ud-relative ud-h-40",
                __source: {
                    fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
                    lineNumber: 12,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $7pxzy$jsx("div", {
                        className: "ud-absolute ud-w-64 ud-h-40 ud-bg-slate-400/20",
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
                            lineNumber: 13,
                            columnNumber: 9
                        },
                        __self: this
                    }),
                    coverUrl ? /*#__PURE__*/ $7pxzy$jsx("img", {
                        className: "ud-w-64 ud-h-40",
                        src: coverUrl,
                        alt: "image cover",
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
                            lineNumber: 15,
                            columnNumber: 11
                        },
                        __self: this
                    }) : /*#__PURE__*/ $7pxzy$jsx("div", {
                        className: "ud-w-64 ud-h-40 ud-bg-primary/20",
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
                            lineNumber: 17,
                            columnNumber: 11
                        },
                        __self: this
                    }),
                    /*#__PURE__*/ $7pxzy$jsx("div", {
                        className: "ud-absolute ud-right-2 ud-top-2",
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
                            lineNumber: 19,
                            columnNumber: 9
                        },
                        __self: this,
                        children: /*#__PURE__*/ $7pxzy$jsx($cd9b2ab9f8bfcd29$export$2e2bcd8739ae039, {
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
            /*#__PURE__*/ $7pxzy$jsxs("div", {
                className: "ud-flex ud-flex-col ud-space-y-1 ud-px-4 ud-py-3",
                __source: {
                    fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
                    lineNumber: 23,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $7pxzy$jsx("h2", {
                        className: "ud-text-black ud-font-semibold group-hover:ud-text-primary",
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/ContentCard.js",
                            lineNumber: 24,
                            columnNumber: 9
                        },
                        __self: this,
                        children: title
                    }),
                    /*#__PURE__*/ $7pxzy$jsx("p", {
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
$d58f8462e748373e$var$ContentCard.propTypes = {
    avatarUrl: $7pxzy$proptypes.string.isRequired,
    coverUrl: $7pxzy$proptypes.string.isRequired,
    title: $7pxzy$proptypes.string.isRequired,
    shortDesc: $7pxzy$proptypes.string.isRequired,
    onClick: $7pxzy$proptypes.func
};
var $d58f8462e748373e$export$2e2bcd8739ae039 = $d58f8462e748373e$var$ContentCard;











function $c6cdc2abd7247496$var$Title({ children: children  }) {
    return(/*#__PURE__*/ $7pxzy$jsx("h1", {
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
$c6cdc2abd7247496$var$Title.propTypes = {
    children: $7pxzy$proptypes.oneOfType([
        $7pxzy$proptypes.string
    ]).isRequired
};
var $c6cdc2abd7247496$export$2e2bcd8739ae039 = $c6cdc2abd7247496$var$Title;



function $278d26b964537d66$var$ContentCardList({ title: title , items: items , onItemClick: onItemClick , ctaText: ctaText , onCtaClick: onCtaClick , hasPadding: hasPadding ,  }) {
    return(/*#__PURE__*/ $7pxzy$jsxs("div", {
        className: $7pxzy$classnames('ud-flex ud-flex-col ud-space-y-2', {
            'ud-container ud-mx-auto ud-pl-6 ': hasPadding
        }),
        __source: {
            fileName: "Dev/ud-miniapp-components/src/components/ContentCardList.js",
            lineNumber: 18,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ $7pxzy$jsxs("div", {
                className: "ud-flex ud-items-center ud-justify-between",
                __source: {
                    fileName: "Dev/ud-miniapp-components/src/components/ContentCardList.js",
                    lineNumber: 23,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $7pxzy$jsx($c6cdc2abd7247496$export$2e2bcd8739ae039, {
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/ContentCardList.js",
                            lineNumber: 24,
                            columnNumber: 9
                        },
                        __self: this,
                        children: title
                    }),
                    /*#__PURE__*/ $7pxzy$jsx($21d9cf92651b4335$export$2e2bcd8739ae039, {
                        variant: "link",
                        className: $7pxzy$classnames({
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
            /*#__PURE__*/ $7pxzy$jsx("div", {
                className: "ud-flex ud-space-x-2 ud-overflow-x-scroll",
                __source: {
                    fileName: "Dev/ud-miniapp-components/src/components/ContentCardList.js",
                    lineNumber: 35,
                    columnNumber: 7
                },
                __self: this,
                children: items.map((item, index)=>/*#__PURE__*/ $7pxzy$jsx("div", {
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/ContentCardList.js",
                            lineNumber: 37,
                            columnNumber: 11
                        },
                        __self: this,
                        children: /*#__PURE__*/ $7pxzy$jsx($d58f8462e748373e$export$2e2bcd8739ae039, {
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
$278d26b964537d66$var$ContentCardList.propTypes = {
    title: $7pxzy$proptypes.string,
    items: $7pxzy$proptypes.array.isRequired,
    onItemClick: $7pxzy$proptypes.func,
    ctaText: $7pxzy$proptypes.string,
    onCtaClick: $7pxzy$proptypes.func,
    hasPadding: $7pxzy$proptypes.bool
};
var $278d26b964537d66$export$2e2bcd8739ae039 = $278d26b964537d66$var$ContentCardList;







function $504dc15b912e26af$var$LoanCard({ firstName: firstName , avatarUrl: avatarUrl , amount: amount , paymentDate: paymentDate , onPay: onPay  }) {
    return(/*#__PURE__*/ $7pxzy$jsxs("div", {
        className: "ud-bg-danger ud-px-4 ud-py-6 ud-rounded-lg ud-shadow-sm",
        __source: {
            fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
            lineNumber: 9,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ $7pxzy$jsxs("div", {
                className: "ud-flex ud-justify-between ud-items-center ud-w-full",
                __source: {
                    fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
                    lineNumber: 10,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $7pxzy$jsxs("p", {
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
                    /*#__PURE__*/ $7pxzy$jsx($cd9b2ab9f8bfcd29$export$2e2bcd8739ae039, {
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
            /*#__PURE__*/ $7pxzy$jsx("h2", {
                className: "ud-mt-3 ud-text-3xl ud-text-black ud-font-semibold",
                __source: {
                    fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
                    lineNumber: 16,
                    columnNumber: 7
                },
                __self: this,
                children: amount
            }),
            /*#__PURE__*/ $7pxzy$jsxs("div", {
                className: "ud-flex ud-justify-between ud-mt-5",
                __source: {
                    fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
                    lineNumber: 19,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $7pxzy$jsxs("div", {
                        __source: {
                            fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
                            lineNumber: 20,
                            columnNumber: 9
                        },
                        __self: this,
                        children: [
                            /*#__PURE__*/ $7pxzy$jsx("p", {
                                className: "ud-text-xs ud-text-primary ud-uppercase",
                                __source: {
                                    fileName: "Dev/ud-miniapp-components/src/components/LoanCard.js",
                                    lineNumber: 21,
                                    columnNumber: 11
                                },
                                __self: this,
                                children: "NEXT SCHEDULED PAYMENT"
                            }),
                            /*#__PURE__*/ $7pxzy$jsx("p", {
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
                    /*#__PURE__*/ $7pxzy$jsx($21d9cf92651b4335$export$2e2bcd8739ae039, {
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
$504dc15b912e26af$var$LoanCard.propTypes = {
    firstName: $7pxzy$proptypes.string.isRequired,
    avatarUrl: $7pxzy$proptypes.string.isRequired,
    amount: $7pxzy$proptypes.string.isRequired,
    paymentDate: $7pxzy$proptypes.string.isRequired,
    onPay: $7pxzy$proptypes.func
};
var $504dc15b912e26af$export$2e2bcd8739ae039 = $504dc15b912e26af$var$LoanCard;







const $1ab94d04ba6b192a$var$SPACE_SIZE = {
    xs: 'ud-mt-1',
    sm: 'ud-mt-2',
    base: 'ud-mt-3',
    large: 'ud-mt-4',
    extraLarge: 'ud-mt-5'
};
function $1ab94d04ba6b192a$var$VSpace({ size: size = 'extraLarge'  }) {
    return(/*#__PURE__*/ $7pxzy$jsx("div", {
        className: $7pxzy$classnames($1ab94d04ba6b192a$var$SPACE_SIZE[size]),
        __source: {
            fileName: "Dev/ud-miniapp-components/src/components/VSpace.js",
            lineNumber: 14,
            columnNumber: 10
        },
        __self: this
    }));
}
$1ab94d04ba6b192a$var$VSpace.propTypes = {
    size: $7pxzy$proptypes.oneOf([
        'xs',
        'sm',
        'base',
        'large',
        'extraLarge'
    ])
};
var $1ab94d04ba6b192a$export$2e2bcd8739ae039 = $1ab94d04ba6b192a$var$VSpace;




export {$cd9b2ab9f8bfcd29$export$2e2bcd8739ae039 as Avatar, $625231aee116e27a$export$2e2bcd8739ae039 as AvatarList, $21d9cf92651b4335$export$2e2bcd8739ae039 as Button, $8e29fa5c29f068a1$export$2e2bcd8739ae039 as Container, $d58f8462e748373e$export$2e2bcd8739ae039 as ContentCard, $278d26b964537d66$export$2e2bcd8739ae039 as ContentCardList, $504dc15b912e26af$export$2e2bcd8739ae039 as LoanCard, $c6cdc2abd7247496$export$2e2bcd8739ae039 as Title, $1ab94d04ba6b192a$export$2e2bcd8739ae039 as VSpace};
