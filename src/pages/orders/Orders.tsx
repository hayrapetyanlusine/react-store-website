import {FC} from "react";
import {useGetOrders} from "../../common/hooks/useGetOrders";
import {Loading} from "../../components/general/loading/Loading";
import {Order} from "../../components/orders/Order";
import "./Orders.scss";

export const Orders: FC = () => {
    const {data: getOrder, isLoading: isOrdersLoading} = useGetOrders();

    return (
        <div className="orders container">
            <h1>History of orders</h1>
            <div className="orders-items-wrapper">
                {
                    isOrdersLoading ? (
                        <Loading/>
                    ) : (
                        getOrder.map((order: any) => {
                            const {image, name, price, id} = order.orderItems[0].product;

                            return (
                                <Order
                                    key={id}
                                    image={image}
                                    name={name}
                                    price={price}
                                />
                            )
                        })
                    )
                }
            </div>
        </div>
    )
}