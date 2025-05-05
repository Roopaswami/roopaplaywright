"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('playwright'), chromium = _a.chromium, firefox = _a.firefox, webkit = _a.webkit;
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, browserChromium, browserFirefox, browserWebkit, _b, pageChromium, pageFirefox, pageWebkit, error_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, Promise.all([
                    chromium.launch({ headless: false }),
                    firefox.launch({ headless: false }),
                    webkit.launch({ headless: false })
                ])];
            case 1:
                _a = _c.sent(), browserChromium = _a[0], browserFirefox = _a[1], browserWebkit = _a[2];
                _c.label = 2;
            case 2:
                _c.trys.push([2, 5, 6, 8]);
                return [4 /*yield*/, Promise.all([
                        browserChromium.newPage(),
                        browserFirefox.newPage(),
                        browserWebkit.newPage()
                    ])];
            case 3:
                _b = _c.sent(), pageChromium = _b[0], pageFirefox = _b[1], pageWebkit = _b[2];
                return [4 /*yield*/, Promise.all([
                        pageChromium.goto('https://www.google.com/'),
                        pageFirefox.goto('https://www.google.com/'),
                        pageWebkit.goto('https://www.google.com/')
                    ])];
            case 4:
                _c.sent();
                console.log('Navigation successful in all browsers!');
                return [3 /*break*/, 8];
            case 5:
                error_1 = _c.sent();
                console.error('An error occurred:', error_1);
                return [3 /*break*/, 8];
            case 6: return [4 /*yield*/, Promise.all([
                    browserChromium.close(),
                    browserFirefox.close(),
                    browserWebkit.close()
                ])];
            case 7:
                _c.sent();
                console.log('All browsers closed.');
                return [7 /*endfinally*/];
            case 8: return [2 /*return*/];
        }
    });
}); })();
