import React, { useState } from "react";
import { Context } from "../Context";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useHover from "../hooks/useHover";

function CartItem({ item }) {
  const [hover, ref] = useHover();
  const deleteBtnClass = hover ? "ri-delete-bin-fill" : "ri-delete-bin-line";
  const { removeFromCart } = React.useContext(Context);
  const MySwal = withReactContent(Swal);
  function handleDelete(id) {
    MySwal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        MySwal.fire("Deleted!", "Your item has been deleted.", "success");
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        MySwal.fire("Cancelled", "Your item is safe :)", "error");
      }
    });
  }

  return (
    <div className="cart-item">
      <i
        style={{ color: "red" }}
        className={deleteBtnClass}
        onClick={() => handleDelete(item.id)}
        ref={ref}
      ></i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
