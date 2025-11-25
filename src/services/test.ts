import {supabase} from '../config/supabaseClient.js';
import { Request, Response } from "express"; 
export const getStudent = async (req: Request, res: Response) => {
    const { data, error } = await supabase.from('sinhvien').select('*');

    if(error) return res.status(500).json({error});
    res.json(data);
    console.log(data);
}