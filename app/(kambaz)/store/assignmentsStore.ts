"use client";
import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";

export type Assignment = {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  dueDate: string;
  availableDate: string;
  untilDate?: string;
};

export const emptyAssignment: Assignment = {
  _id: "new",
  title: "New Assignment",
  course: "",
  description: "New assignment description",
  points: 100,
  dueDate: "",
  availableDate: "",
  untilDate: "",
};

type AssignmentsStore = {
  assignments: Assignment[];
  addAssignment: (assignment: Assignment) => void;
  updateAssignment: (assignment: Assignment) => void;
  deleteAssignment: (assignmentId: string) => void;
  findAssignment: (assignmentId: string) => Assignment | undefined;
};

export const useAssignmentsStore = create<AssignmentsStore>((set, get) => ({
  assignments: assignmentsJson as Assignment[],
  addAssignment: (assignment) =>
    set((state) => ({
      assignments: [...state.assignments, { ...assignment, _id: crypto.randomUUID() }],
    })),
  updateAssignment: (assignment) =>
    set((state) => ({
      assignments: state.assignments.map((a) => (a._id === assignment._id ? assignment : a)),
    })),
  deleteAssignment: (assignmentId) =>
    set((state) => ({ assignments: state.assignments.filter((a) => a._id !== assignmentId) })),
  findAssignment: (assignmentId) => get().assignments.find((a) => a._id === assignmentId),
}));
