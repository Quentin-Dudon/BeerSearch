import Home from '../Views/Home'; 
import BarTemplate from '../Views/BarTemplate';
import { createStackNavigator } from "react-navigation";

export const NavToBarTemplate = createStackNavigator(
    {
        Home: {
            screen: Home
        }, 
        BarTemplate: {
            screen: BarTemplate,
        }   
    }
);