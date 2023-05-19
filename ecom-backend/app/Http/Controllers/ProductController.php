<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    function addProduct(Request $request)
    {
        $product = new Product;
        $product->name = $request->input('name');
        $product->price = $request->input('price');
        $product->description = $request->input('description');
        // $product->file_path=$request->file('file')->store('products');
        $product->save();
        return $product;
    }

    function list()
    {
        return Product::all();
    }

    function delete($id)
    {

        $result = Product::where('id', $id)->delete();
        if ($result) {
            return ["result" => "Product deleted"];
        } else {
            return ["result" => "Opaeration Failed!"];
        }
    }
    function getProduct($id)
    {
        $product = Product::find($id);
        if ($product) {
            return ["result" => $product];
        } else {
            return ["result" => "Product with this id not found"];
        }
    }
    public function update(Request $request, $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        $product->name = $request->input('name');
        $product->price = $request->input('price');
        $product->description = $request->input('description');
        $product->save();

        return response()->json(['message' => 'Product updated successfully']);
    }

    function search($key)
    {
        return Product::where("name", "Like", "%$key%")->get();
    }
}
