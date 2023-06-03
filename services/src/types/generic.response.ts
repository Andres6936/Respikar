export type GenericResponse<T> = {
    isBase64Encoded: boolean,
    statusCode: number
    body: T
}