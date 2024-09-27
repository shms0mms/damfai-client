import { Layout as SiteLayout } from "@/components/layout";
import { type PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
	return <SiteLayout>{children}</SiteLayout>;
}
