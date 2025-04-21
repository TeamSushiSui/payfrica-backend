type RequestEvent = {
    request_id: string,
    agent_id: string,
    amount: number,
    user: string,
    coin_type: { name: string },
    status: DepositStatus,
    time: number
}