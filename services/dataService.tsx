"use server";
import { DashboardData } from "@/components/dashboard/dashboard-content";
import { pool } from "@/lib/database";
import { ILocation, INewCall, IStreets, IUser } from "@/models/interfaces";
import { AlarmClock, AlertTriangle, PhoneCall, Shield } from "lucide-react";
import { getServerUser } from "./authService";
import { ResultSetHeader, RowDataPacket } from "mysql2";

export async function getDashboardData(
  userId: string,
  dashboardType: string
): Promise<DashboardData | null> {
  if (dashboardType === "user") {
    const dashboardData: DashboardData = {
      cards: [
        {
          title: "Total Calls",
          icon: <PhoneCall className="text-green-400" />,
          value: 248,
          subTitle: "This month",
        },
        {
          title: "Most Used Service",
          icon: <Shield className="text-blue-400" />,
          value: "Police",
          subTitle: "59% of all calls",
        },
        {
          title: "Avg Response Time",
          icon: <AlarmClock className="text-orange-400" />,
          value: "4.2 min",
          subTitle: "12% faster than average",
        },
        {
          title: "Priority Calls",
          icon: <AlertTriangle className="text-red-400" />,
          value: 8,
          subTitle: "10% more than others",
        },
      ],
      pieChart: {
        title: "Calls by Service",
        subTitle: "Distribution of calls handled this month",
        data: [
          { label: "Police", value: 145, color: "#3b82f6" },
          { label: "Fire", value: 67, color: "#ef4444" },
          { label: "EMS", value: 89, color: "#22c55e" },
        ],
      },
      chart: {
        title: "Call Volume Trends",
        subTitle: "Usage patterns over selected period",
        filters: ["7D", "14D", "30D", "All Time"],
        data: {
          "7D": [
            { day: "Mon", calls: 15, date: "Jan 1" },
            { day: "Tue", calls: 22, date: "Jan 2" },
            { day: "Wed", calls: 18, date: "Jan 3" },
            { day: "Thu", calls: 25, date: "Jan 4" },
            { day: "Fri", calls: 30, date: "Jan 5" },
            { day: "Sat", calls: 28, date: "Jan 6" },
            { day: "Sun", calls: 20, date: "Jan 7" },
          ],
          "14D": [
            { day: "Jan 8", calls: 42 },
            { day: "Jan 9", calls: 38 },
            { day: "Jan 10", calls: 45 },
            { day: "Jan 11", calls: 50 },
            { day: "Jan 12", calls: 48 },
            { day: "Jan 13", calls: 55 },
            { day: "Jan 14", calls: 60 },
            { day: "Jan 15", calls: 58 },
            { day: "Jan 16", calls: 65 },
            { day: "Jan 17", calls: 70 },
            { day: "Jan 18", calls: 68 },
            { day: "Jan 19", calls: 75 },
            { day: "Jan 20", calls: 80 },
            { day: "Jan 21", calls: 78 },
          ],
          "30D": [
            { day: "Week 1", calls: 150 },
            { day: "Week 2", calls: 180 },
            { day: "Week 3", calls: 200 },
            { day: "Week 4", calls: 220 },
          ],
          "All Time": [
            { day: "Jan 2024", calls: 600 },
            { day: "Feb 2024", calls: 750 },
            { day: "Mar 2024", calls: 800 },
            { day: "Apr 2024", calls: 900 },
            { day: "May 2024", calls: 850 },
            { day: "Jun 2024", calls: 950 },
            { day: "Jul 2024", calls: 1000 },
            { day: "Aug 2024", calls: 1100 },
            { day: "Sep 2024", calls: 1050 },
            { day: "Oct 2024", calls: 1150 },
            { day: "Nov 2024", calls: 1200 },
            { day: "Dec 2024", calls: 1250 },
            { day: "Jan 2025", calls: 1300 },
          ],
        },
      },
      table: {
        title: "Recent Calls",
        subTitle: "Latest dispatch activities",
        columns: ["Time", "Type", "Service", "Priority", "Status", "Location"],
        data: [
          {
            1: "14:32",
            2: 32,
            3: "EMS",
            4: "Delta",
            5: "Completed",
            6: "Route 19 (Alta St) @ Route 18 (Vinewood Blvd)",
          },
          {
            1: "14:15",
            2: 51,
            3: "Fire",
            4: "Charlie",
            5: "Completed",
            6: "Chum St @ Buccaneer Way",
          },
          {
            1: "13:58",
            2: 69,
            3: "Fire",
            4: "Echo",
            5: "Completed",
            6: "279 Stinger Rd",
          },
          {
            1: "13:45",
            2: 101,
            3: "Police",
            4: "Delta",
            5: "Completed",
            6: "Route 68 Hwy @ Senora Rd",
          },
          {
            1: "13:22",
            2: 10,
            3: "EMS",
            4: "Charlie",
            5: "Completed",
            6: "Route 19 (Alta St) @ Route 18 (Vinewood Blvd)",
          },
        ],
      },
      bottom: [
        {
          title: "Today's Performance",
          data: [
            { label: "Calls Handled", value: 12 },
            { label: "Avg Response", value: "3.8min", text: "text-green-400" },
            { label: "Completion Rate", value: "98%", text: "text-green-400" },
          ],
        },
        {
          title: "Call Types This Week",
          data: [
            { label: 1, value: "5" },
            { label: 32, value: "6" },
            { label: 69, value: "1" },
          ],
        },
        {
          title: "Weekly Summary",
          data: [
            { label: "Total Calls", value: 89 },
            { label: "Avg Daily", value: 12 },
            { label: "Peak Day", value: "Friday", text: "text-green-400" },
          ],
        },
      ],
    };
    return dashboardData;
  } else if (dashboardType === "ems") {
    const dashboardData: DashboardData = {
      cards: [
        {
          title: "Total EMS Calls",
          icon: <PhoneCall className="text-green-400" />,
          value: 120,
          subTitle: "This month",
        },
        {
          title: "Most Used Call",
          icon: <Shield className="text-blue-400" />,
          value: "32 - Unkn Problem",
          subTitle: "45% of all calls",
        },
        {
          title: "Avg Response Time",
          icon: <AlarmClock className="text-orange-400" />,
          value: "3.5 min",
          subTitle: "15% faster than average",
        },
        {
          title: "Priority Calls",
          icon: <AlertTriangle className="text-red-400" />,
          value: 5,
          subTitle: "8% more than others",
        },
      ],
      pieChart: {
        title: "EMS Calls by Type",
        subTitle: "Distribution of EMS calls handled this month",
        data: [
          { label: "Unkn Problem", value: 60, color: "#3b82f6" },
          { label: "Medical Emergency", value: 30, color: "#ef4444" },
          { label: "Accident", value: 20, color: "#f59e0b" },
        ],
      },
      chart: {
        title: "EMS Call Volume Trends",
        subTitle: "Usage patterns over selected period",
        filters: ["7D", "14D", "30D", "All Time"],
        data: {
          "7D": [
            { day: "Mon", calls: 15, date: "Jan 1" },
            { day: "Tue", calls: 22, date: "Jan 2" },
            { day: "Wed", calls: 18, date: "Jan 3" },
            { day: "Thu", calls: 25, date: "Jan 4" },
            { day: "Fri", calls: 30, date: "Jan 5" },
            { day: "Sat", calls: 28, date: "Jan 6" },
            { day: "Sun", calls: 20, date: "Jan 7" },
          ],
          "14D": [
            { day: "Jan 8", calls: 42 },
            { day: "Jan 9", calls: 38 },
            { day: "Jan 10", calls: 45 },
            { day: "Jan 11", calls: 50 },
            { day: "Jan 12", calls: 48 },
            { day: "Jan 13", calls: 55 },
            { day: "Jan 14", calls: 60 },
            { day: "Jan 15", calls: 58 },
            { day: "Jan 16", calls: 65 },
            { day: "Jan 17", calls: 70 },
            { day: "Jan 18", calls: 68 },
            { day: "Jan 19", calls: 75 },
            { day: "Jan 20", calls: 80 },
            { day: "Jan 21", calls: 78 },
          ],
          "30D": [
            { day: "Week 1", calls: 150 },
            { day: "Week 2", calls: 180 },
            { day: "Week 3", calls: 200 },
            { day: "Week 4", calls: 220 },
          ],
          "All Time": [
            { day: "Jan 2024", calls: 600 },
            { day: "Feb 2024", calls: 750 },
            { day: "Mar 2024", calls: 800 },
            { day: "Apr 2024", calls: 900 },
            { day: "May 2024", calls: 850 },
            { day: "Jun 2024", calls: 950 },
            { day: "Jul 2024", calls: 1000 },
            { day: "Aug 2024", calls: 1100 },
            { day: "Sep 2024", calls: 1050 },
            { day: "Oct 2024", calls: 1150 },
            { day: "Nov 2024", calls: 1200 },
            { day: "Dec 2024", calls: 1250 },
            { day: "Jan 2025", calls: 1300 },
          ],
        },
      },
      table: {
        title: "Recent EMS Calls",
        subTitle: "Latest EMS dispatch activities",
        columns: ["Time", "Type", "Service", "Priority", "Status", "Location"],
        data: [
          {
            1: "14:32",
            2: 32,
            3: "EMS",
            4: "Delta",
            5: "Completed",
            6: "Route 19 (Alta St) @ Route 18 (Vinewood Blvd)",
          },
          {
            1: "14:15",
            2: 51,
            3: "EMS",
            4: "Charlie",
            5: "Completed",
            6: "Chum St @ Buccaneer Way",
          },
          {
            1: "13:58",
            2: 69,
            3: "EMS",
            4: "Echo",
            5: "Completed",
            6: "279 Stinger Rd",
          },
          {
            1: "13:45",
            2: 101,
            3: "EMS",
            4: "Delta",
            5: "Completed",
            6: "Route 68 Hwy @ Senora Rd",
          },
          {
            1: "13:22",
            2: 10,
            3: "EMS",
            4: "Charlie",
            5: "Completed",
            6: "Route 19 (Alta St) @ Route 18 (Vinewood Blvd)",
          },
        ],
      },
      bottom: [
        {
          title: "Today's Performance",
          data: [
            { label: "Calls Handled", value: 12 },
            { label: "Avg Response", value: "3.8min", text: "text-green-400" },
            { label: "Completion Rate", value: "98%", text: "text-green-400" },
          ],
        },
        {
          title: "Call Types This Week",
          data: [
            { label: 1, value: "5" },
            { label: 32, value: "6" },
            { label: 69, value: "1" },
          ],
        },
        {
          title: "Weekly Summary",
          data: [
            { label: "Total Calls", value: 89 },
            { label: "Avg Daily", value: 12 },
            { label: "Peak Day", value: "Friday", text: "text-green-400" },
          ],
        },
      ],
    };
    return dashboardData;
  } else {
    return null;
  }
}

export async function getLocations() {
  //   CREATE TABLE locations (
  //     id INT AUTO_INCREMENT PRIMARY KEY,
  //     name TEXT NOT NULL,
  //     postal VARCHAR(4) NOT NULL,
  //     mainStreet VARCHAR(256) NOT NULL,
  //     crossStreet1 VARCHAR(256) NOT NULL,
  //     crossStreet2 VARCHAR(256) NOT NULL,
  //     apt VARCHAR(256) NULL,
  //     twp VARCHAR(256) NULL,
  //     municp VARCHAR(256) NULL,
  //     cids TEXT NULL,
  //     hasHeli BOOLEAN NOT NULL DEFAULT FALSE,
  //     fireBox VARCHAR(256) NOT NULL,

  //     fdDistrict ENUM(
  //         "01","02","03","04","05","06","07","08","09","10","11","12"
  //     ) NOT NULL,
  //     fdRunOrder VARCHAR(256) NOT NULL,

  //     pdDistrict ENUM(
  //         "RCSO","MBPD","BCSO","PBPD","SAHP","SSPD","LCSO","LSPD"
  //     ) NOT NULL,
  //     pdRunOrder VARCHAR(256) NOT NULL,

  //     post ENUM("North","South") NOT NULL,
  //     patrolArea ENUM("1","2","3","4","5","6","7") NOT NULL,

  //     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  //     created_by varchar(36) NOT NULL,
  //     updated_by varchar(36) NOT NULL,

  //     CONSTRAINT fk_locations_created_by FOREIGN KEY (created_by) REFERENCES users(id),
  //     CONSTRAINT fk_locations_updated_by FOREIGN KEY (updated_by) REFERENCES users(id)
  // );

  const [rows] = await pool.query(
    "SELECT * FROM locations ORDER BY postal ASC"
  );
  return rows as ILocation[];
}

export async function getStreets() {
  //   CREATE TABLE streets (
  //     id INT AUTO_INCREMENT PRIMARY KEY,
  //     name TEXT NOT NULL,
  //     crossingStreets JSON NOT NULL,
  //     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  //     created_by VARCHAR(36) NOT NULL,
  //     updated_by VARCHAR(36) NOT NULL,
  //     CONSTRAINT fk_streets_created_by FOREIGN KEY (created_by) REFERENCES users(id),
  //     CONSTRAINT fk_streets_updated_by FOREIGN KEY (updated_by) REFERENCES users(id)
  // );

  const [rows] = await pool.query("SELECT * FROM streets");
  return rows as IStreets[];
}

export async function createNewLocation(
  location: ILocation,
  user: IUser
): Promise<boolean> {
  const toNull = (v: unknown) => (v === undefined || v === "" ? null : v);

  const fdRunOrderJson =
    typeof location.fdRunOrder === "string"
      ? location.fdRunOrder
      : JSON.stringify(location.fdRunOrder ?? []);
  const pdRunOrderJson =
    typeof location.pdRunOrder === "string"
      ? location.pdRunOrder
      : JSON.stringify(location.pdRunOrder ?? []);

  try {
    const sql = `
      INSERT INTO locations
        (name, postal, mainStreet, crossStreet1, crossStreet2,
         apt, twp, municp, cids, hasHeli, fireBox,
         fdDistrict, fdRunOrder, pdDistrict, pdRunOrder,
         post, patrolArea, created_by)
      VALUES
        (?, ?, ?, ?, ?,
         ?, ?, ?, ?, ?, ?,
         ?, CAST(? AS JSON), ?, CAST(? AS JSON),
         ?, ?, ?)
    `;

    const params = [
      location.name,
      location.postal,
      location.mainStreet,
      location.crossStreet1,
      location.crossStreet2,
      toNull(location.apt),
      toNull(location.twp),
      toNull(location.municp),
      toNull(location.cids),
      !!location.hasHeli, // BOOLEAN → TINYINT(1)
      location.fireBox,

      location.fdDistrict, // ENUM "01".."12"
      fdRunOrderJson, // JSON string
      location.pdDistrict, // ENUM police agencies
      pdRunOrderJson, // JSON string

      location.post, // ENUM "North"/"South"
      location.patrolArea, // ENUM "1".."7"
      user.id,
    ];

    const [result] = await pool.query(sql, params);
    return (result as any).affectedRows === 1;
  } catch (error) {
    console.error("Error creating new location:", error);
    return false;
  }
}

export async function createNewStreet(name: string, user: IUser) {
  try {
    const sql = `
      INSERT INTO streets
        (name, created_by)
      VALUES
        (?, ?)
    `;

    const params = [name, user.id];

    const [result] = await pool.query(sql, params);
    return (result as any).affectedRows === 1;
  } catch (error) {
    console.error("Error creating new street:", error);
    return false;
  }
}

type CrossingStreet = NonNullable<IStreets["crossingStreets"]>[number];

function normalizeCrossing(
  v: unknown
): CrossingStreet[] {
  // v might be undefined, a stringified JSON, or an array already
  if (!v) return [];
  if (Array.isArray(v)) return v as CrossingStreet[];
  if (typeof v === "string") {
    try {
      const parsed = JSON.parse(v);
      return Array.isArray(parsed) ? (parsed as CrossingStreet[]) : [];
    } catch {
      return [];
    }
  }
  return [];
}

function dedupeCrossings(arr: CrossingStreet[]): CrossingStreet[] {
  // Build a stable key using the fields that define uniqueness for you
  const seen = new Set<string>();
  const out: CrossingStreet[] = [];
  for (const item of arr) {
    const key = [
      item.street?.toLowerCase().trim(),
      (item.postal || []).join("|"),
      item.twp || "",
      item.municp || "",
    ].join("§"); // unlikely delimiter
    if (!seen.has(key)) {
      seen.add(key);
      out.push(item);
    }
  }
  return out;
}

export async function createNewCrossStreets(
  streetName: string,
  newCrossingStreets: IStreets["crossingStreets"],
  user: IUser
): Promise<boolean> {
  // 1) fetch rows
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM streets WHERE name = ? LIMIT 1",
    [streetName]
  );

  if (!rows || rows.length === 0) {
    console.error("Street not found:", streetName);
    return false;
  }

  const existing = rows[0] as unknown as IStreets & RowDataPacket;

  // 2) normalize existing + incoming
  const current = normalizeCrossing((existing as any).crossingStreets);
  const incoming = normalizeCrossing(newCrossingStreets);

  // 3) merge + dedupe
  const merged = dedupeCrossings([...current, ...incoming]);

  try {
    const sql = `
      UPDATE streets
         SET crossingStreets = CAST(? AS JSON),
             updated_by = ?,
             updated_at = NOW()
       WHERE id = ?
       LIMIT 1
    `;

    const params = [JSON.stringify(merged), user.id, (existing as any).id];

    const [result] = await pool.query<ResultSetHeader>(sql, params);
    return result.affectedRows === 1;
  } catch (error) {
    console.error("Error creating new crossing streets:", error);
    return false;
  }
}