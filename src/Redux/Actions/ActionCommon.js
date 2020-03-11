export function request(request_type) {
    return {
        type: request_type
    }
}

export function receive(recived_type, json) {
    return {
        type: recived_type,
        payload: {
            json,
            receivedAt: Date.now()
        }
    }
}