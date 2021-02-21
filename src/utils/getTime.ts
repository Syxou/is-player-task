export default (timestamp: number) => {
    const h = Math.floor(timestamp / 60 / 60);
    const m = Math.floor(timestamp / 60) - (h * 60);
    const s = timestamp % 60;
    return `${h ? h + ':' : ''}${m}:${s}`
}