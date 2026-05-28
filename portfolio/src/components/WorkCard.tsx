"use client";
import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, X } from "lucide-react";
import Link from "next/link";

export default function WorkCard({
  company,
  role,
  description,
  projects = [],
  startDate,
  endDate,
}: {
  company: string;
  role: string;
  description: string;
  projects?: { description: string; link: string }[];
  startDate: string;
  endDate: string;
}) {
  const [open, setOpen] = useState(false);
  const scrollYRef = useRef(0);

  // Prevent background scrolling when modal is open without losing scroll position.
  useEffect(() => {
    if (!open) return;

    scrollYRef.current = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollYRef.current);
    };
  }, [open]);

  return (
    <>
      <div
        className="w-full flex items-center justify-between gap-4 px-2 py-4 cursor-pointer rounded-lg"
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center justify-center gap-4 ">
          <div className="w-max">
            <h3 className="text- font-medium">{company}</h3>
            <p className="text-sm text-gray-400">{role}</p>
          </div>
        </div>
        <hr className="border-white/10 border-dotted w-full" />
        <div className="w-max">
          <p className="min-w-max">
            {startDate} - <br className="lg:hidden" /> {endDate}
          </p>
        </div>
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-[#0b0b0b] rounded-lg p-6 w-full lg:w-1/2 shadow-lg border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                <X className="w-4 h-4 cursor-pointer" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-lg font-medium text-white">{company}</h2>
                <p className="text-gray-400">{role}</p>
                <p className="text-sm text-gray-500">
                  {startDate} - {endDate}
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">{description}</p>

                {projects.length !== 0 && (
                  <div>
                    <p className="text-white font-medium mb-2">Projects</p>
                    <div className="space-y-1">
                      {projects.map((project, index) => (
                        <Link
                          href={project.link || "#"}
                          key={index}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 text-sm font-mono bg-white/5 px-2 py-1 rounded border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors"
                        >
                          <div className="">{project.description}</div>
                          <ExternalLink className="w-3 h-3 inline-block ml-2" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
