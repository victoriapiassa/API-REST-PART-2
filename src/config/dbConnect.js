import mongoose from "mongoose"
import process from "process";

mongoose.connect(process.env.STRING_CONEXAO_DB);

let db = mongoose.connection;

export default db;