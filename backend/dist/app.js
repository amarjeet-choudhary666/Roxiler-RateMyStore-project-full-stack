"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
exports.app = app;
const FRONTEND_URL = process.env.FRONTEND_URL || 'https://roxiler-rate-my-store-project-full.vercel.app';
app.use((0, cors_1.default)({
    origin: FRONTEND_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}));
app.use(express_1.default.json({ limit: '16kb' }));
app.use(express_1.default.urlencoded({ limit: '16kb', extended: true }));
app.use((0, cookie_parser_1.default)());
app.get('/health', (_req, res) => {
    res.json({ message: 'Server is running!', timestamp: new Date().toISOString() });
});
const user_Routes_1 = __importDefault(require("./routes/user.Routes"));
const storeowner_routes_1 = __importDefault(require("./routes/storeowner.routes"));
const admin_routes_1 = __importDefault(require("./routes/admin.routes"));
const store_routes_1 = __importDefault(require("./routes/store.routes"));
const rating_routes_1 = __importDefault(require("./routes/rating.routes"));
app.use("/v1/api/users", user_Routes_1.default);
app.use("/v1/api/storeowner", storeowner_routes_1.default);
app.use("/v1/api/admin", admin_routes_1.default);
app.use("/v1/api/stores", store_routes_1.default);
app.use("/v1/api/ratings", rating_routes_1.default);
