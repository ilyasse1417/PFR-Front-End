import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from './style';
import { Navbar, SignUp, SignIn, CmProfile, EditProfile, Reviews, Home, Footer, ListCm, } from './components';

const App = () => (
    <Router>
        <div className="w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Artisan" element={<ListCm />} />
                        <Route path="/Connection" element={<SignIn />} />
                        <Route path="/SignUp" element={<SignUp />} />
                        <Route path="/Edit" element={<EditProfile />} />
                        <Route path="/cmsAdd" element={<CmProfile />} />
                        <Route path="/Cmp" element={<><CmProfile /><Reviews /></>} />
                    </Routes>
                </div>
            </div>

            <Footer />
        </div>
    </Router>
);

export default App;
