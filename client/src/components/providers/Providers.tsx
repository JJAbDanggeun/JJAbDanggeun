import React from "react";
import { store } from "@/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface ProvidersType {
	children: React.ReactNode;
}

const Providers = ({ children }: ProvidersType) => {
	const queryClient = new QueryClient({
		//관련 설명 : https://velog.io/@alsghk9701/QueryClient%EC%9D%98-Default-Options-%EC%A0%81%EC%9A%A9
		defaultOptions: {
			queries: {
				//전역적으로 사용 옵션
				suspense: true,
			},
		},
	});

	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				{/* <ReactQueryDevtools initialIsOpen /> */}
				{children}
			</QueryClientProvider>
		</Provider>
	);
};

export default Providers;
