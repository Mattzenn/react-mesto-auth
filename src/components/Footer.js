function Footer() {

    const nowyear = new Date().getFullYear()

    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; {nowyear} Mesto Russia</p>
        </footer>
    )
}

export default Footer