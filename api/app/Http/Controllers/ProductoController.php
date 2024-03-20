<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;


class ProductoController extends Controller
{
    public function index(){
        $productos=Producto::all();
        return $productos;
    }

    public function store(Request $request){
        $producto=new Producto();
        $producto->descripcion=$request->descripcion;
        $producto->precio=$request->precio;
        $producto->stock=$request->stock;

        $producto->save();

    }

    public function show($id){
        $producto=Producto::find($id);
        return $producto;
    }

    public function update(Request $request){
        $producto=Producto::findOrFail($request->id);
        $producto->descripcion=$request->descripcion;
        $producto->precio=$request->precio;
        $producto->stock=$request->stock;

        $producto->save();
        return $producto;
    }


    public function destroy($id){
        $producto=Producto::destroy($id);
        return $producto;
    }

}
