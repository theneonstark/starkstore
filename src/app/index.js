export default function Hello() {
    const name = () => {
        const nav  = document.querySelector('nav');
        console.log(nav);
        console.log('hello');
    }
    name();
}