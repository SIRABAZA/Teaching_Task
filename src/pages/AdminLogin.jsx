import React, { useEffect, useState } from "react";
import { GalleryVerticalEnd } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function AdminLogin({ className, ...props }) {
  const [id, setId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("admin_teacher_id")) {
      navigate("/dashboard");
    }
  }, [navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/teachers/${id}`);
      if (response.data && response.data.id) {
        localStorage.setItem("admin_teacher_id", response.data.id);
        setError("");
        // Optionally redirect or show success
        navigate("/dashboard");
      } else {
        setError("Teacher not found.");
      }
    } catch (err) {
      setError("Teacher not found.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background flex flex-col items-center justify-center gap-6 p-6 md:p-24">
      <div className="w-full max-w-sm"></div>
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <a
                href="#"
                className="flex flex-col items-center gap-2 font-medium"
              >
                <div className="flex  items-center justify-center rounded-md">
                  <img
                    src="https://cdn.niceonesa.com/web/assets/images/rtl_logo.svg?v=2.0.18(2)%202x"
                    alt="Logo"
                    className="w-1/2"
                  />
                </div>
                <span className="sr-only">Acme Inc.</span>
              </a>
              <h1 className="text-xl font-bold">Teacher Login</h1>
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="id">Teacher ID</Label>
                <Input
                  id="id"
                  type="number"
                  placeholder="Enter teacher ID"
                  required
                  value={id}
                  onChange={(e) => setId(e.target.value.replace(/\D/g, ""))}
                  min={1}
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Checking..." : "Login"}
              </Button>
              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}
            </div>
          </div>
        </form>
        <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
          By logging in, you agree to our <a href="#">Terms of Service</a> and{" "}
          <a href="#">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
}
