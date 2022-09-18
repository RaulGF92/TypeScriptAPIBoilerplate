export default interface Runable {
    start(): Promise<void>;
    stop(): Promise<void>;
}