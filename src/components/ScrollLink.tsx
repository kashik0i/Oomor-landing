import {useScrollTop} from "@/hooks/use-scroll-top"
import {Link} from "react-router-dom";


export const ScrollLink = ({to, className, children}: {
    to: string,
    className: string
    children: React.ReactNode
}) => {
    const scrollToTop = useScrollTop()

    const handleClick = () => {
        scrollToTop()
    }

    return (
        <Link to={to} className={className} onClick={handleClick}>
            {children}
        </Link>
    )
}