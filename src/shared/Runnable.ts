type Runnable = {
    start(): Promise<void>;
    stop(): Promise<void>;
}
export default Runnable;