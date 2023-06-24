export const scrollDownToTarget = (id) => {
    const target = document.getElementById(id);
    if (target) {
        target.scrollIntoView({behavior: "smooth"});
    } else {
        console.error("Missing target");
    }
};

export const initScroll = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
}
