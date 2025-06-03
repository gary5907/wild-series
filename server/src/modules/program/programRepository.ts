import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type program = {
  id: number;
  name: string;
};

class programRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all categories from the "category" table
    const [rows] = await databaseClient.query<Rows>("select * from program");

    // Return the array of categories
    return rows as program[];
  }
}

export default new programRepository();