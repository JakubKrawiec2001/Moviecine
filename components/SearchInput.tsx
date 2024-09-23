"use client";

import { searchInputSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";

const SearchInput = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof searchInputSchema>>({
    resolver: zodResolver(searchInputSchema),
    defaultValues: {
      input: "",
    },
  });

  function onSubmit(values: z.infer<typeof searchInputSchema>) {
    console.log(values);

    router.push(`/search/${values.input}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="glassmorphism_gray px-4 pb-2 rounded-2xl"
      >
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => {
            return (
              <FormItem className="flex items-center gap-1">
                <FormControl>
                  <Input
                    placeholder="Search..."
                    {...field}
                    className="border-none h-[30px]"
                    autoComplete="off"
                  />
                </FormControl>
                <FaSearch className="text-2xl" />
              </FormItem>
            );
          }}
        />
      </form>
    </Form>
  );
};

export default SearchInput;
