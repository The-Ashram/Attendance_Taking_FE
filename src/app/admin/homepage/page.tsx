"use client";
import Header from "@/app/admin/components/Header";
import Dashboard from "@/app/admin/components/Dashboard";
import ResidentsTable from "../components/ResidentsTable";

export default function HomePage() {
  return (
    <>
      <Header />
      <Dashboard />
      <ResidentsTable />
    </>
  );
}
