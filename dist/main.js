var $81XA9$reactjsxruntime = require("react/jsx-runtime");
require("react");
var $81XA9$proptypes = require("prop-types");
var $81XA9$classnames = require("classnames");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequireb326"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequireb326"] = parcelRequire;
}

$parcel$export(module.exports, "Avatar", () => $1dfa65d911dbcc46$export$2e2bcd8739ae039);
$parcel$export(module.exports, "AvatarList", () => $cf674ce9945ad554$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Badge", () => $ad281e573d8937c4$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Button", () => $3415cc989545fa06$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Container", () => $7a7b545e7917d847$export$2e2bcd8739ae039);
$parcel$export(module.exports, "ContentCard", () => $6844af41886a83f1$export$2e2bcd8739ae039);
$parcel$export(module.exports, "ContentCardList", () => $a259075f1cf3825a$export$2e2bcd8739ae039);
$parcel$export(module.exports, "LoanCard", () => $caf936a2347067ba$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Title", () => $8026b5d0dd95d057$export$2e2bcd8739ae039);
$parcel$export(module.exports, "VSpace", () => $2ff28e8b883a699f$export$2e2bcd8739ae039);
$parcel$export(module.exports, "ArticleCard", () => $2c9b3ab99bc7039e$exports.default);
$parcel$export(module.exports, "ArticleCardList", () => $80a1a9fa7fe3c685$export$2e2bcd8739ae039);




function $1dfa65d911dbcc46$var$Avatar({ avatarUrl: avatarUrl , hasBorder: hasBorder , ...rest }) {
    return(/*#__PURE__*/ $81XA9$reactjsxruntime.jsx("img", {
        ...rest,
        className: ($parcel$interopDefault($81XA9$classnames))('ud-h-10 ud-w-10 ud-object-cover ud-rounded-full', {
            'ud-border-2 ud-border-white': hasBorder
        }),
        src: avatarUrl,
        alt: `avatar`,
        __source: {
            fileName: "src/components/Avatar.js",
            lineNumber: 7,
            columnNumber: 5
        },
        __self: this
    }));
}
$1dfa65d911dbcc46$var$Avatar.propTypes = {
    avatarUrl: ($parcel$interopDefault($81XA9$proptypes)).string.isRequired,
    hasBorder: ($parcel$interopDefault($81XA9$proptypes)).bool
};
var $1dfa65d911dbcc46$export$2e2bcd8739ae039 = $1dfa65d911dbcc46$var$Avatar;






function $cf674ce9945ad554$var$AvatarList({ users: users , label: label , onClick: onClick  }) {
    return(/*#__PURE__*/ $81XA9$reactjsxruntime.jsxs("div", {
        className: "ud-flex ud-space-x-2 ud-items-center",
        onClick: onClick,
        __source: {
            fileName: "src/components/AvatarList.js",
            lineNumber: 7,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ $81XA9$reactjsxruntime.jsx("div", {
                className: "ud-flex ud--space-x-2",
                __source: {
                    fileName: "src/components/AvatarList.js",
                    lineNumber: 8,
                    columnNumber: 7
                },
                __self: this,
                children: users.slice(0, 3).map((user, index)=>/*#__PURE__*/ $81XA9$reactjsxruntime.jsx($1dfa65d911dbcc46$export$2e2bcd8739ae039, {
                        avatarUrl: user.avatarUrl,
                        hasBorder: true,
                        __source: {
                            fileName: "src/components/AvatarList.js",
                            lineNumber: 10,
                            columnNumber: 11
                        },
                        __self: this
                    }, index)
                )
            }),
            /*#__PURE__*/ $81XA9$reactjsxruntime.jsx("p", {
                className: "ud-text-sm",
                __source: {
                    fileName: "src/components/AvatarList.js",
                    lineNumber: 13,
                    columnNumber: 7
                },
                __self: this,
                children: label
            })
        ]
    }));
}
$cf674ce9945ad554$var$AvatarList.propTypes = {
    users: ($parcel$interopDefault($81XA9$proptypes)).array.isRequired,
    label: ($parcel$interopDefault($81XA9$proptypes)).string.isRequired,
    onClick: ($parcel$interopDefault($81XA9$proptypes)).func
};
var $cf674ce9945ad554$export$2e2bcd8739ae039 = $cf674ce9945ad554$var$AvatarList;






const $ad281e573d8937c4$var$SIZE = {
    xs: 'ud-text-[10px] ud-px-2.5 ud-py-0.5',
    sm: 'ud-text-xs ud-px-2.5 ud-py-0.5 '
};
const $ad281e573d8937c4$var$VARIANT = {
    primary: 'ud-bg-primary ud-text-white',
    info: 'ud-bg-info ud-text-white',
    danger: 'ud-bg-danger ud-text-white',
    warning: 'ud-bg-warning ud-text-black',
    success: 'ud-bg-success ud-text-white'
};
function $ad281e573d8937c4$var$Badge({ variant: variant = 'primary' , size: size = 'sm' , children: children , onClick: onClick , ...rest }) {
    return(/*#__PURE__*/ $81XA9$reactjsxruntime.jsx("span", {
        onClick: onClick,
        className: ($parcel$interopDefault($81XA9$classnames))('ud-rounded-full ', $ad281e573d8937c4$var$VARIANT[variant], $ad281e573d8937c4$var$SIZE[size]),
        ...rest,
        __source: {
            fileName: "src/components/Badge.js",
            lineNumber: 26,
            columnNumber: 5
        },
        __self: this,
        children: children
    }));
}
$ad281e573d8937c4$var$Badge.propTypes = {
    variant: ($parcel$interopDefault($81XA9$proptypes)).oneOf([
        'primary',
        'info',
        'danger',
        'warning',
        'success'
    ]),
    children: ($parcel$interopDefault($81XA9$proptypes)).node,
    onClick: ($parcel$interopDefault($81XA9$proptypes)).func
};
var $ad281e573d8937c4$export$2e2bcd8739ae039 = $ad281e573d8937c4$var$Badge;






const $3415cc989545fa06$var$BUTTON_SIZE = {
    xs: 'ud-text-xs ud-px-3 ud-py-2 ',
    sm: 'ud-text-sm ud-px-3 ud-py-2',
    base: 'ud-text-sm ud-px-5 ud-py-2.5',
    large: 'ud-text-base ud-font-medium ud-px-5 ud-py-3',
    extraLarge: 'ud-text-base ud-font-medium ud-px-6 ud-py-3.5'
};
const $3415cc989545fa06$var$BUTTON_VARIANT = {
    primary: 'ud-bg-primary ud-text-white hover:ud-bg-primary-dark',
    info: 'ud-bg-info ud-text-white hover:ud-bg-info-dark',
    danger: 'ud-bg-danger ud-text-white hover:ud-bg-danger-dark',
    warning: 'ud-bg-warning ud-text-black hover:ud-bg-warning-dark',
    success: 'ud-bg-success ud-text-white hover:ud-bg-success-dark',
    link: 'ud-text-primary ud-underline ud-bg-transparent hover:ud-text-primary-dark !ud-p-0'
};
function $3415cc989545fa06$var$Button({ variant: variant = 'primary' , size: size = 'base' , children: children , className: className , block: block = false , disabled: disabled = false , ...rest }) {
    return(/*#__PURE__*/ $81XA9$reactjsxruntime.jsx("button", {
        ...rest,
        type: "button",
        disabled: disabled,
        className: ($parcel$interopDefault($81XA9$classnames))('ud-rounded-md ud-font-sans ud-border-0 ud-cursor-pointer disabled:ud-opacity-75 disabled:ud-cursor-not-allowed', $3415cc989545fa06$var$BUTTON_VARIANT[variant], $3415cc989545fa06$var$BUTTON_SIZE[size], className, {
            'ud-block ud-w-full': block
        }),
        __source: {
            fileName: "src/components/Button.js",
            lineNumber: 32,
            columnNumber: 5
        },
        __self: this,
        children: children
    }));
}
$3415cc989545fa06$var$Button.variant = $3415cc989545fa06$var$BUTTON_VARIANT;
$3415cc989545fa06$var$Button.size = $3415cc989545fa06$var$BUTTON_SIZE;
$3415cc989545fa06$var$Button.propTypes = {
    variant: ($parcel$interopDefault($81XA9$proptypes)).oneOf([
        'primary',
        'info',
        'danger',
        'warning',
        'success',
        'link', 
    ]),
    size: ($parcel$interopDefault($81XA9$proptypes)).oneOf([
        'xs',
        'sm',
        'base',
        'large',
        'extraLarge'
    ]),
    children: ($parcel$interopDefault($81XA9$proptypes)).node,
    className: ($parcel$interopDefault($81XA9$proptypes)).string,
    block: ($parcel$interopDefault($81XA9$proptypes)).bool,
    disabled: ($parcel$interopDefault($81XA9$proptypes)).bool
};
var $3415cc989545fa06$export$2e2bcd8739ae039 = $3415cc989545fa06$var$Button;





// TODO: Add option to adjust the min height of container to full screen
function $7a7b545e7917d847$var$Container({ children: children  }) {
    return(/*#__PURE__*/ $81XA9$reactjsxruntime.jsx("div", {
        className: "ud-container ud-px-6 ud-py-6 ud-mx-auto",
        __source: {
            fileName: "src/components/Container.js",
            lineNumber: 7,
            columnNumber: 5
        },
        __self: this,
        children: children
    }));
}
$7a7b545e7917d847$var$Container.propTypes = {
    children: ($parcel$interopDefault($81XA9$proptypes)).node.isRequired
};
var $7a7b545e7917d847$export$2e2bcd8739ae039 = $7a7b545e7917d847$var$Container;






function $6844af41886a83f1$var$ContentCard({ avatarUrl: avatarUrl , coverUrl: coverUrl , title: title , shortDesc: shortDesc , onClick: onClick  }) {
    return(/*#__PURE__*/ $81XA9$reactjsxruntime.jsxs("article", {
        className: "ud-flex ud-flex-col ud-rounded-lg ud-w-64 ud-bg-white ud-shadow-md ud-group hover:ud-bg-warning ud-cursor-pointer ud-overflow-hidden",
        onClick: onClick,
        __source: {
            fileName: "src/components/ContentCard.js",
            lineNumber: 8,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ $81XA9$reactjsxruntime.jsxs("div", {
                className: "ud-relative ud-h-40",
                __source: {
                    fileName: "src/components/ContentCard.js",
                    lineNumber: 12,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $81XA9$reactjsxruntime.jsx("div", {
                        className: "ud-absolute ud-w-64 ud-h-40 ud-bg-slate-400/20",
                        __source: {
                            fileName: "src/components/ContentCard.js",
                            lineNumber: 13,
                            columnNumber: 9
                        },
                        __self: this
                    }),
                    coverUrl ? /*#__PURE__*/ $81XA9$reactjsxruntime.jsx("img", {
                        className: "ud-w-64 ud-h-40",
                        src: coverUrl,
                        alt: "image cover",
                        __source: {
                            fileName: "src/components/ContentCard.js",
                            lineNumber: 15,
                            columnNumber: 11
                        },
                        __self: this
                    }) : /*#__PURE__*/ $81XA9$reactjsxruntime.jsx("div", {
                        className: "ud-w-64 ud-h-40 ud-bg-primary/20",
                        __source: {
                            fileName: "src/components/ContentCard.js",
                            lineNumber: 17,
                            columnNumber: 11
                        },
                        __self: this
                    }),
                    /*#__PURE__*/ $81XA9$reactjsxruntime.jsx("div", {
                        className: "ud-absolute ud-right-2 ud-top-2",
                        __source: {
                            fileName: "src/components/ContentCard.js",
                            lineNumber: 19,
                            columnNumber: 9
                        },
                        __self: this,
                        children: /*#__PURE__*/ $81XA9$reactjsxruntime.jsx($1dfa65d911dbcc46$export$2e2bcd8739ae039, {
                            avatarUrl: avatarUrl,
                            __source: {
                                fileName: "src/components/ContentCard.js",
                                lineNumber: 20,
                                columnNumber: 11
                            },
                            __self: this
                        })
                    })
                ]
            }),
            /*#__PURE__*/ $81XA9$reactjsxruntime.jsxs("div", {
                className: "ud-flex ud-flex-col ud-space-y-1 ud-px-4 ud-py-3",
                __source: {
                    fileName: "src/components/ContentCard.js",
                    lineNumber: 23,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $81XA9$reactjsxruntime.jsx("h2", {
                        className: "ud-text-black ud-font-semibold group-hover:ud-text-primary",
                        __source: {
                            fileName: "src/components/ContentCard.js",
                            lineNumber: 24,
                            columnNumber: 9
                        },
                        __self: this,
                        children: title
                    }),
                    /*#__PURE__*/ $81XA9$reactjsxruntime.jsx("p", {
                        className: "ud-text-sm ud-text-black",
                        __source: {
                            fileName: "src/components/ContentCard.js",
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
$6844af41886a83f1$var$ContentCard.propTypes = {
    avatarUrl: ($parcel$interopDefault($81XA9$proptypes)).string.isRequired,
    coverUrl: ($parcel$interopDefault($81XA9$proptypes)).string.isRequired,
    title: ($parcel$interopDefault($81XA9$proptypes)).string.isRequired,
    shortDesc: ($parcel$interopDefault($81XA9$proptypes)).string.isRequired,
    onClick: ($parcel$interopDefault($81XA9$proptypes)).func
};
var $6844af41886a83f1$export$2e2bcd8739ae039 = $6844af41886a83f1$var$ContentCard;











function $8026b5d0dd95d057$var$Title({ children: children  }) {
    return(/*#__PURE__*/ $81XA9$reactjsxruntime.jsx("h1", {
        className: "ud-text-lg ud-font-bold ud-text-black",
        __source: {
            fileName: "src/components/Title.js",
            lineNumber: 6,
            columnNumber: 10
        },
        __self: this,
        children: children
    }));
}
$8026b5d0dd95d057$var$Title.propTypes = {
    children: ($parcel$interopDefault($81XA9$proptypes)).oneOfType([
        ($parcel$interopDefault($81XA9$proptypes)).string
    ]).isRequired
};
var $8026b5d0dd95d057$export$2e2bcd8739ae039 = $8026b5d0dd95d057$var$Title;



function $a259075f1cf3825a$var$ContentCardList({ title: title , items: items , onItemClick: onItemClick , ctaText: ctaText , onCtaClick: onCtaClick , hasPadding: hasPadding ,  }) {
    return(/*#__PURE__*/ $81XA9$reactjsxruntime.jsxs("div", {
        className: ($parcel$interopDefault($81XA9$classnames))('ud-flex ud-flex-col ud-space-y-2', {
            'ud-container ud-mx-auto ud-pl-6 ': hasPadding
        }),
        __source: {
            fileName: "src/components/ContentCardList.js",
            lineNumber: 18,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ $81XA9$reactjsxruntime.jsxs("div", {
                className: "ud-flex ud-items-center ud-justify-between",
                __source: {
                    fileName: "src/components/ContentCardList.js",
                    lineNumber: 23,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $81XA9$reactjsxruntime.jsx($8026b5d0dd95d057$export$2e2bcd8739ae039, {
                        __source: {
                            fileName: "src/components/ContentCardList.js",
                            lineNumber: 24,
                            columnNumber: 9
                        },
                        __self: this,
                        children: title
                    }),
                    /*#__PURE__*/ $81XA9$reactjsxruntime.jsx($3415cc989545fa06$export$2e2bcd8739ae039, {
                        variant: "link",
                        className: ($parcel$interopDefault($81XA9$classnames))({
                            'ud-mr-6': hasPadding
                        }),
                        onClick: onCtaClick,
                        __source: {
                            fileName: "src/components/ContentCardList.js",
                            lineNumber: 25,
                            columnNumber: 9
                        },
                        __self: this,
                        children: ctaText
                    })
                ]
            }),
            /*#__PURE__*/ $81XA9$reactjsxruntime.jsx("div", {
                className: "ud-flex ud-space-x-2 ud-overflow-x-scroll",
                __source: {
                    fileName: "src/components/ContentCardList.js",
                    lineNumber: 35,
                    columnNumber: 7
                },
                __self: this,
                children: items.map((item, index)=>/*#__PURE__*/ $81XA9$reactjsxruntime.jsx("div", {
                        __source: {
                            fileName: "src/components/ContentCardList.js",
                            lineNumber: 37,
                            columnNumber: 11
                        },
                        __self: this,
                        children: /*#__PURE__*/ $81XA9$reactjsxruntime.jsx($6844af41886a83f1$export$2e2bcd8739ae039, {
                            avatarUrl: item.avatarUrl,
                            coverUrl: item.coverUrl,
                            title: item.title,
                            shortDesc: item.shortDesc,
                            onClick: ()=>onItemClick(item)
                            ,
                            __source: {
                                fileName: "src/components/ContentCardList.js",
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
$a259075f1cf3825a$var$ContentCardList.propTypes = {
    title: ($parcel$interopDefault($81XA9$proptypes)).string,
    items: ($parcel$interopDefault($81XA9$proptypes)).array.isRequired,
    onItemClick: ($parcel$interopDefault($81XA9$proptypes)).func,
    ctaText: ($parcel$interopDefault($81XA9$proptypes)).string,
    onCtaClick: ($parcel$interopDefault($81XA9$proptypes)).func,
    hasPadding: ($parcel$interopDefault($81XA9$proptypes)).bool
};
var $a259075f1cf3825a$export$2e2bcd8739ae039 = $a259075f1cf3825a$var$ContentCardList;







function $caf936a2347067ba$var$LoanCard({ firstName: firstName , avatarUrl: avatarUrl , amount: amount , paymentDate: paymentDate , onPay: onPay  }) {
    return(/*#__PURE__*/ $81XA9$reactjsxruntime.jsxs("div", {
        className: "ud-bg-warning ud-px-4 ud-py-6 ud-rounded-lg ud-shadow-sm",
        __source: {
            fileName: "src/components/LoanCard.js",
            lineNumber: 9,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ $81XA9$reactjsxruntime.jsxs("div", {
                className: "ud-flex ud-justify-between ud-items-center ud-w-full",
                __source: {
                    fileName: "src/components/LoanCard.js",
                    lineNumber: 10,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $81XA9$reactjsxruntime.jsxs("p", {
                        className: "ud-text-primary ud-text-base ud-capitalize",
                        __source: {
                            fileName: "src/components/LoanCard.js",
                            lineNumber: 11,
                            columnNumber: 9
                        },
                        __self: this,
                        children: [
                            firstName,
                            " Personal loan"
                        ]
                    }),
                    /*#__PURE__*/ $81XA9$reactjsxruntime.jsx($1dfa65d911dbcc46$export$2e2bcd8739ae039, {
                        avatarUrl: avatarUrl,
                        __source: {
                            fileName: "src/components/LoanCard.js",
                            lineNumber: 14,
                            columnNumber: 9
                        },
                        __self: this
                    })
                ]
            }),
            /*#__PURE__*/ $81XA9$reactjsxruntime.jsx("h2", {
                className: "ud-mt-3 ud-text-3xl ud-text-black ud-font-semibold",
                __source: {
                    fileName: "src/components/LoanCard.js",
                    lineNumber: 16,
                    columnNumber: 7
                },
                __self: this,
                children: amount
            }),
            /*#__PURE__*/ $81XA9$reactjsxruntime.jsxs("div", {
                className: "ud-flex ud-justify-between ud-mt-5",
                __source: {
                    fileName: "src/components/LoanCard.js",
                    lineNumber: 19,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ $81XA9$reactjsxruntime.jsxs("div", {
                        __source: {
                            fileName: "src/components/LoanCard.js",
                            lineNumber: 20,
                            columnNumber: 9
                        },
                        __self: this,
                        children: [
                            /*#__PURE__*/ $81XA9$reactjsxruntime.jsx("p", {
                                className: "ud-text-xs ud-text-primary ud-uppercase",
                                __source: {
                                    fileName: "src/components/LoanCard.js",
                                    lineNumber: 21,
                                    columnNumber: 11
                                },
                                __self: this,
                                children: "NEXT SCHEDULED PAYMENT"
                            }),
                            /*#__PURE__*/ $81XA9$reactjsxruntime.jsx("p", {
                                className: "ud-text-base ud-text-black ud-font-bold",
                                __source: {
                                    fileName: "src/components/LoanCard.js",
                                    lineNumber: 24,
                                    columnNumber: 11
                                },
                                __self: this,
                                children: paymentDate
                            })
                        ]
                    }),
                    /*#__PURE__*/ $81XA9$reactjsxruntime.jsx($3415cc989545fa06$export$2e2bcd8739ae039, {
                        onClick: onPay,
                        __source: {
                            fileName: "src/components/LoanCard.js",
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
$caf936a2347067ba$var$LoanCard.propTypes = {
    firstName: ($parcel$interopDefault($81XA9$proptypes)).string.isRequired,
    avatarUrl: ($parcel$interopDefault($81XA9$proptypes)).string.isRequired,
    amount: ($parcel$interopDefault($81XA9$proptypes)).string.isRequired,
    paymentDate: ($parcel$interopDefault($81XA9$proptypes)).string.isRequired,
    onPay: ($parcel$interopDefault($81XA9$proptypes)).func
};
var $caf936a2347067ba$export$2e2bcd8739ae039 = $caf936a2347067ba$var$LoanCard;







const $2ff28e8b883a699f$var$SPACE_SIZE = {
    xs: 'ud-mt-1',
    sm: 'ud-mt-2',
    base: 'ud-mt-3',
    large: 'ud-mt-4',
    extraLarge: 'ud-mt-5'
};
function $2ff28e8b883a699f$var$VSpace({ size: size = 'extraLarge'  }) {
    return(/*#__PURE__*/ $81XA9$reactjsxruntime.jsx("div", {
        className: ($parcel$interopDefault($81XA9$classnames))($2ff28e8b883a699f$var$SPACE_SIZE[size]),
        __source: {
            fileName: "src/components/VSpace.js",
            lineNumber: 14,
            columnNumber: 10
        },
        __self: this
    }));
}
$2ff28e8b883a699f$var$VSpace.propTypes = {
    size: ($parcel$interopDefault($81XA9$proptypes)).oneOf([
        'xs',
        'sm',
        'base',
        'large',
        'extraLarge'
    ])
};
var $2ff28e8b883a699f$export$2e2bcd8739ae039 = $2ff28e8b883a699f$var$VSpace;







parcelRequire.register("9akzB", function(module, exports) {
module.exports = new URL("Exclude.16a0dfc2.png", "file:" + __filename).toString();

});



function $2c9b3ab99bc7039e$var$ArticleCard({ articleTitle: articleTitle , articleContent: articleContent , onClick: onClick  }) {
    return(/*#__PURE__*/ $81XA9$reactjsxruntime.jsx("div", {
        className: "ud-w-40 ud-shadow-md",
        onClick: onClick,
        __source: {
            fileName: "src/components/ArticleCard.js",
            lineNumber: 9,
            columnNumber: 5
        },
        __self: this,
        children: /*#__PURE__*/ $81XA9$reactjsxruntime.jsxs("div", {
            className: "ud-bg-violet-200 hover:ud-bg-violet-300 ud-py-6 ud-px-4 ud-rounded-lg",
            __source: {
                fileName: "src/components/ArticleCard.js",
                lineNumber: 10,
                columnNumber: 7
            },
            __self: this,
            children: [
                /*#__PURE__*/ $81XA9$reactjsxruntime.jsx($8026b5d0dd95d057$export$2e2bcd8739ae039, {
                    __source: {
                        fileName: "src/components/ArticleCard.js",
                        lineNumber: 11,
                        columnNumber: 9
                    },
                    __self: this,
                    children: articleTitle
                }),
                /*#__PURE__*/ $81XA9$reactjsxruntime.jsx("div", {
                    __source: {
                        fileName: "src/components/ArticleCard.js",
                        lineNumber: 12,
                        columnNumber: 9
                    },
                    __self: this,
                    children: /*#__PURE__*/ $81XA9$reactjsxruntime.jsxs("p", {
                        __source: {
                            fileName: "src/components/ArticleCard.js",
                            lineNumber: 13,
                            columnNumber: 11
                        },
                        __self: this,
                        children: [
                            " ",
                            articleContent
                        ]
                    })
                }),
                /*#__PURE__*/ $81XA9$reactjsxruntime.jsx("div", {
                    __source: {
                        fileName: "src/components/ArticleCard.js",
                        lineNumber: 15,
                        columnNumber: 9
                    },
                    __self: this,
                    children: /*#__PURE__*/ $81XA9$reactjsxruntime.jsx("img", {
                        src: (parcelRequire("9akzB")),
                        __source: {
                            fileName: "src/components/ArticleCard.js",
                            lineNumber: 16,
                            columnNumber: 11
                        },
                        __self: this
                    })
                })
            ]
        })
    }));
}
$2c9b3ab99bc7039e$var$ArticleCard.PropTypes = {
    articleTitle: ($parcel$interopDefault($81XA9$proptypes)).string.isRequired,
    articleContent: ($parcel$interopDefault($81XA9$proptypes)).string.isRequired,
    onClick: ($parcel$interopDefault($81XA9$proptypes)).func
};
$2c9b3ab99bc7039e$var$ArticleCard.defaultProps = {
    articleTitle: 'Article',
    articleContent: 'Some details about the content',
    onClick: ()=>{
        console.log('Article Card Clicked');
    }
};
var $2c9b3ab99bc7039e$export$2e2bcd8739ae039 = $2c9b3ab99bc7039e$var$ArticleCard;







function $80a1a9fa7fe3c685$var$ArticleCardList({ title: title , articleTitle: articleTitle , articleContent: articleContent , items: items , onItemClick: onItemClick , hasPadding: hasPadding ,  }) {
    return(/*#__PURE__*/ $81XA9$reactjsxruntime.jsxs("div", {
        className: "ud-flex ud-flex-col ud-space-y-2 ud-container ud-mx-auto ud-pl-6",
        __source: {
            fileName: "src/components/ArticleCardList.js",
            lineNumber: 15,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ $81XA9$reactjsxruntime.jsx("div", {
                className: "ud-flex ud-items-center ud-justify-between",
                __source: {
                    fileName: "src/components/ArticleCardList.js",
                    lineNumber: 16,
                    columnNumber: 7
                },
                __self: this,
                children: /*#__PURE__*/ $81XA9$reactjsxruntime.jsx($8026b5d0dd95d057$export$2e2bcd8739ae039, {
                    __source: {
                        fileName: "src/components/ArticleCardList.js",
                        lineNumber: 17,
                        columnNumber: 9
                    },
                    __self: this,
                    children: title
                })
            }),
            /*#__PURE__*/ $81XA9$reactjsxruntime.jsx("div", {
                className: "ud-flex ud-space-x-2 ud-overflow-x-scroll",
                __source: {
                    fileName: "src/components/ArticleCardList.js",
                    lineNumber: 19,
                    columnNumber: 7
                },
                __self: this,
                children: items.map((item, index)=>/*#__PURE__*/ $81XA9$reactjsxruntime.jsx("div", {
                        __source: {
                            fileName: "src/components/ArticleCardList.js",
                            lineNumber: 21,
                            columnNumber: 11
                        },
                        __self: this,
                        children: /*#__PURE__*/ $81XA9$reactjsxruntime.jsx($2c9b3ab99bc7039e$exports.default, {
                            articleTitle: item.articleTitle,
                            articleContent: item.articleContent,
                            onClick: ()=>onItemClick(item)
                            ,
                            __source: {
                                fileName: "src/components/ArticleCardList.js",
                                lineNumber: 22,
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
$80a1a9fa7fe3c685$var$ArticleCardList.PropTypes = {
    title: ($parcel$interopDefault($81XA9$proptypes)).string,
    articleTitle: ($parcel$interopDefault($81XA9$proptypes)).string,
    articleContent: ($parcel$interopDefault($81XA9$proptypes)).string,
    items: ($parcel$interopDefault($81XA9$proptypes)).array,
    onItemClick: ($parcel$interopDefault($81XA9$proptypes)).func
};
var $80a1a9fa7fe3c685$export$2e2bcd8739ae039 = $80a1a9fa7fe3c685$var$ArticleCardList;




