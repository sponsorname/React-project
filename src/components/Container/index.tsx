import { ReactNode } from 'react';
import NavBar from '#components/NavBar';
import Footer from '#components/Footer';

interface ContainerProps {
    children: ReactNode;
}
const Container = ({ children,
}: ContainerProps) => {
    return (
        <> 
            <NavBar />
                {children}
            <Footer />
        </>
    );
};
export default Container;