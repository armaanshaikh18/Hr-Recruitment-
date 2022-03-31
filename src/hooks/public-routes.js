import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
// import {
//   setIsMetamaskInstalled,
//   setIsWalletConnected,
//   setUserLoginStatus,
//   setUserWalletAddress,
// } from "../redux/actions";
// import { getAccessToken, setWalletAddress } from "../core/utils/token";
// import metamaskService from "../core/services/smart-contracts/metamask";
// import {
//   getEnergyMasterData,
//   getMasterData,
// } from "../core/services/api/nft";
// import {
//   setMasterData,
//   setEnergyMasterData,
// } from "../redux/actions/nft-action";

const PublicRoute = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  //   const { isMetamaskInstalled, isLoggedIn } = useSelector(
  //     (state) => state.userReducer
  //   );
  //   const { dashboard, masterData, energyDashboard, energyMasterData } =
  //     useSelector((state) => state.nftReducer);

  useEffect(() => {
    const fetchData = () => {
      try {
        const accessToken = getAccessToken();
        if (accessToken) {
          dispatch(setUserLoginStatus(true));
        } else {
          dispatch(setUserLoginStatus(false));
        }
        setIsLoading(false);
      } catch (error) {
        console.log("privateRoute : ", error);
      }
    };

    fetchData();
  }, [location]);

  if (isLoading) return <h2>Loading...</h2>;
  return <Outlet />;
};

export default PublicRoute;
