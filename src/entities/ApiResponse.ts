export class ApiResponse<T> {
    success: Boolean;
    error?: Object;
    data: T;
    meta: MetaResponse
    constructor(success:Boolean,error: Object, data: T, meta: MetaResponse){
        this.data = data;
        this.error = error;
        this.success = success
        this.meta = meta
    }
}

export class MetaResponse {
    count: number
    constructor(count: number) {
        this.count = count
    }
}