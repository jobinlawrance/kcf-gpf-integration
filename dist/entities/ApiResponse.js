"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiResponse {
    constructor(success, error, data, meta) {
        this.data = data;
        this.error = error;
        this.success = success;
        this.meta = meta;
    }
}
exports.ApiResponse = ApiResponse;
class MetaResponse {
    constructor(count) {
        this.count = count;
    }
}
exports.MetaResponse = MetaResponse;
