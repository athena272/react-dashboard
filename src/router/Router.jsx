import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../pages/RootLayout/RootLayout";
import ItemsLayout from "../pages/items/ItemsLayout/ItemsLayout";
import ListItems from "../pages/items/ListItems/ListItems";
import CreateItem from "../pages/items/CreateItem/CreateItem";
import ShowItem from "../pages/items/ShowItem/ShowItem";
import UpdateItem from "../pages/items/UpdateItem/UpdateItem";
import Home from "../pages/Home/Home"

const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout />,
    children: [
        { index: true, element: <Home /> },
        {
            path: "items",
            element: <ItemsLayout />,
            children: [
                { index: true, element: <ListItems /> },
                { path: "new", element: <CreateItem /> },
                { path: ":id", element: <ShowItem /> },
                { path: ":id/update", element: <UpdateItem /> }
            ]
        }
    ]
}])

export default router;