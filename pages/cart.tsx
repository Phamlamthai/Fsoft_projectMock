import Empty from "@/components/cart/empty";
import Header from "@/components/cart/header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../styles/cart.module.scss";
export default function cart() {
  const Router = useRouter();
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);

  return (
    <>
      <Header />
      {/* <div className={styles.cart}>
        {cart.cartItems.length > 0 ? "" : <Empty />}
      </div> */}
    </>
  );
}
