import { FaTrash } from "react-icons/fa";
import UserCart from "../../../Hooks/UserCart";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = UserCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0); //for calculatiogn total price
    console.log(cart);
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-4xl">Items : {cart.length} </h2>
                <h2 className="text-4xl">Total Price : ${totalPrice} </h2>
                <button className="btn btn-primary">Pay</button>
            </div>
            {/* item details */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Actons</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>

                                <td>
                                    {item.name}
                                </td>
                                <th>
                                    ${item.price}
                                </th>
                                <td className="text-2xl text-red-500">
                                    <button onClick={() => handleDelete(item._id)}>
                                        <FaTrash></FaTrash>
                                    </button>
                                </td>

                            </tr>)
                        }


                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default Cart;