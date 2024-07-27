import { useQuery } from "@tanstack/react-query";
import i18next from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert, SafeAreaView, Text, View } from "react-native";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/view/Heading";
import { fetchOne } from "@/services/users";
import { useTheme } from "@/theme";
import ExploreHeaderContainer from "./ExploreHeaderContainer";
import ExploreSearchBar from "@/components/app/explore/ExploreSearchBar";
import CategoriesContainer from "@/components/app/explore/CategoriesContainer";
import RecommendationContainer from "@/components/app/explore/RecommendationContainer";
import ExploreProductsContainer from "@/components/app/explore/ExploreProductsContainer";

function ExploreScreenContainer() {
  const { t } = useTranslation(["common", "welcome"]);

  const {
    colors,
    variant,
    changeTheme,
    layout,
    gutters,
    fonts,
    components,
    backgrounds,
  } = useTheme();

  const [currentId, setCurrentId] = useState(-1);

  const { isSuccess, data, isFetching } = useQuery({
    queryKey: ["example", currentId],
    queryFn: () => {
      return fetchOne(currentId);
    },
    enabled: currentId >= 0,
  });

  useEffect(() => {
    if (isSuccess) {
      Alert.alert(t("example:welcome", data.name));
    }
  }, [isSuccess, data]);

  const onChangeTheme = () => {
    changeTheme(variant === "default" ? "dark" : "default");
  };

  const onChangeLanguage = (lang: "fr" | "en") => {
    void i18next.changeLanguage(lang);
  };

  return (
    <>
      <View style={{ display: "flex", width: "100%", flexDirection: "column" }}>
        <ExploreHeaderContainer />
        <ExploreSearchBar />
        <CategoriesContainer />
        <RecommendationContainer />
        <ExploreProductsContainer />
      </View>
    </>
  );
}

export default ExploreScreenContainer;
