import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Relations } from "./relations";

export const PageTabs = ({ id }: { id: number }) => {
  return (
    <Tabs defaultValue="account" className="flex flex-col">
      <TabsList className="justify-center items-center mx-auto">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="characters">Characters</TabsTrigger>
        <TabsTrigger value="staff">Staff</TabsTrigger>
        <TabsTrigger value="relations">Relations</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview</TabsContent>
      <TabsContent value="characters">Characters</TabsContent>
      <TabsContent value="staff">Staff</TabsContent>
      <TabsContent value="relations">
        <Relations id={id} />
      </TabsContent>
      <TabsContent value="reviews">Reviews</TabsContent>
    </Tabs>
  );
};
